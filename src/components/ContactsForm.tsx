"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PhoneInput from './PhoneInput';
import { sendLeadToCRM } from '../lib/crm';

interface ContactsFormProps {
  title?: string;
  subtitle?: React.ReactNode;
  buttonText?: string;
  commentPlaceholder?: string;
  hiddenFields?: { name: string; value: string }[];
  subtext?: React.ReactNode;
}

export default function ContactsForm({ 
  title = "Написать нам", 
  subtitle = "Оставьте имя и номер телефона. При желании кратко опишите ситуацию — это поможет юристу подготовиться к разговору.",
  buttonText = "Оставить заявку",
  commentPlaceholder = "Кратко опишите ситуацию или вопрос…",
  hiddenFields,
  subtext = "Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
}: ContactsFormProps = {}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const name = formData.get('name')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    // Собираем все служебные и скрытые поля из формы и пропса hiddenFields
    const extraData: Record<string, string> = {};
    if (hiddenFields && hiddenFields.length > 0) {
      hiddenFields.forEach(f => {
        if (f.name && f.value) {
          extraData[f.name] = f.value;
        }
      });
    }

    formData.forEach((value, key) => {
      if (!['name', 'phone', 'message', 'agreement'].includes(key)) {
        extraData[key] = value.toString();
      }
    });

    let specialist = extraData.specialist || extraData.lawyer || '';
    if (!specialist) {
      const rawTitle = typeof window !== 'undefined' ? document.title : '';
      const cleanTitle = rawTitle.replace(/\s*\|.*$/, '').replace(/—.*$/, '').trim();
      const path = typeof window !== 'undefined' ? window.location.pathname : '';

      if (path.includes('/voennyj-yurist')) {
        specialist = `Конопкин Д. С. (${cleanTitle || 'Военное право'})`;
      } else if (cleanTitle) {
        specialist = cleanTitle;
      } else {
        specialist = 'Заявка с сайта';
      }
    }

    const payload = {
      name,
      phone: phone ? (phone.startsWith('+') ? "'" + phone : phone) : '',
      message,
      specialist,
      pageId: extraData.pageId || 'CIV-05',
      ctaSource: extraData.ctaSource || 'form_submit',
      pricingFormat: extraData.pricingFormat || '',
      ...extraData,
      page_url: typeof window !== 'undefined' ? window.location.href : '',
      page_title: typeof window !== 'undefined' ? document.title : ''
    };

    try {
      const result = await sendLeadToCRM(payload);
      if (result.success) {
        setLoading(false);
        setSubmitted(true);
      } else {
        throw new Error(result.error || 'Ошибка отправки в CRM');
      }
    } catch (err: any) {
      console.error('Ошибка отправки заявки:', err);
      setLoading(false);
      setError('Не удалось отправить форму. Проверьте соединение или позвоните нам прямо сейчас.');
    }
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
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, maxWidth: '320px' }}>
          Мы получили ваши данные и перезвоним вам в ближайшее время.
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
      
      {error && (
        <div style={{ 
          background: '#FFF5F5', 
          border: '1px solid #FEB2B2', 
          color: '#C53030', 
          padding: '16px', 
          marginBottom: '20px', 
          fontSize: '14px', 
          lineHeight: 1.5 
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>Не удалось отправить форму</div>
          <div style={{ marginBottom: '10px' }}>{error}</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="tel:+79103503111" style={{ color: '#9B2C2C', fontWeight: 'bold', textDecoration: 'underline' }}>
              📞 +7 (910) 350-31-11
            </a>
            <a href="https://max.ru/join/j5TVaYjQLyJwXfW1azJJ84YZToaXviRu-YFPDy8gMBI" target="_blank" rel="noopener noreferrer" style={{ color: '#9B2C2C', fontWeight: 'bold', textDecoration: 'underline' }}>
              MAX
            </a>
            <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#9B2C2C', fontWeight: 'bold', textDecoration: 'underline' }}>
              ВКонтакте
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {hiddenFields?.map((field, i) => (
          <input key={i} type="hidden" name={field.name} value={field.value} />
        ))}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Имя (необязательно)</label>
          <input 
            type="text" 
            id="name"
            name="name" 
            autoComplete="name"
            placeholder="Иван Иванов" 
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
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Телефон <span style={{ color: 'var(--color-gold)' }}>*</span></label>
          <PhoneInput 
            id="phone"
            name="phone"
            autoComplete="tel"
            required
            pattern="^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$"
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
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Описание ситуации (необязательно)</label>
          <textarea 
            id="message" 
            name="message"
            rows={3}
            placeholder={commentPlaceholder}
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
        </div>


        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: '4px' }}>
          <input
            type="checkbox"
            name="agreement"
            required
            aria-required="true"
            style={{ marginTop: '3px', accentColor: 'var(--color-gold)', flexShrink: 0 }}
          />
          <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <Link href="/consent/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Я даю согласие на обработку персональных данных</Link>
            {' '}и подтверждаю, что ознакомлен с{' '}
            <Link href="/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>Политикой в отношении обработки персональных данных</Link>.
          </span>
        </label>
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            width: '100%', 
            padding: '16px', 
            fontSize: '16px', 
            marginTop: '8px',
            background: loading ? '#6C7A89' : '#10273B',
            color: '#FFFFFF',
            border: '1px solid #9B7E55',
            borderRadius: '0',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(16, 39, 59, 0.15)',
            opacity: loading ? 0.8 : 1
          }}
          onMouseOver={(e) => {
            if (!loading) {
              e.currentTarget.style.background = '#9B7E55';
              e.currentTarget.style.borderColor = '#9B7E55';
            }
          }}
          onMouseOut={(e) => {
            if (!loading) {
              e.currentTarget.style.background = '#10273B';
              e.currentTarget.style.borderColor = '#9B7E55';
            }
          }}
        >
          {loading ? 'Отправка...' : buttonText}
        </button>
        
        {subtext && (
          <div style={{ marginTop: '4px', fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4, textAlign: 'center' }}>
            {subtext}
          </div>
        )}
      </form>
    </div>
  );
}


