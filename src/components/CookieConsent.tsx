'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or declined
    const consent = localStorage.getItem('dejure_cookie_consent');
    if (!consent) {
      // Small delay for smooth entry
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dejure_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('dejure_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление о файлах cookie"
      className="cookie-consent-banner"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        maxWidth: '440px',
        width: 'calc(100% - 48px)',
        background: '#FFFFFF',
        border: '1px solid rgba(23, 50, 77, 0.12)',
        borderRadius: '8px',
        padding: '20px 24px',
        boxShadow: '0 12px 36px rgba(16, 39, 59, 0.16)',
        zIndex: 9999,
        animation: 'fadeInUp 0.4s ease-out'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B7E55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M16 15.5v.01"></path>
            <path d="M12 12v.01"></path>
            <path d="M11 17v.01"></path>
            <path d="M7 14v.01"></path>
          </svg>
          <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-deep-blue, #10273B)', fontFamily: 'var(--font-serif)' }}>
            Использование файлов cookie
          </span>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary, #55606E)', lineHeight: 1.5, margin: 0 }}>
          Мы используем файлы cookie для корректной работы сайта, сохранения ваших настроек и анализа посещаемости. Подробнее в нашей{' '}
          <Link href="/politika-konfidencialnosti" style={{ color: 'var(--color-primary, #10273B)', textDecoration: 'underline' }}>
            Политике конфиденциальности
          </Link>.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
          <button
            onClick={handleAccept}
            className="btn btn-primary"
            style={{
              padding: '8px 20px',
              fontSize: '13px',
              backgroundColor: '#10273B',
              color: '#FFFFFF',
              border: '1px solid #9B7E55',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Принять
          </button>
          <button
            onClick={handleDecline}
            className="btn-outline"
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              color: 'var(--color-text-secondary, #55606E)',
              background: 'transparent',
              border: '1px solid rgba(23, 50, 77, 0.2)',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Отклонить
          </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 576px) {
          .cookie-consent-banner {
            bottom: 16px !important;
            right: 16px !important;
            left: 16px !important;
            width: auto !important;
            max-width: none !important;
          }
        }
      `}} />
    </div>
  );
}
