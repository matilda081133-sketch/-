'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, CONSENT_EVENT } from '@/lib/cookieConsent';

/**
 * Cookie Consent Banner.
 * - Shows after 800 ms if no stored decision or decision is expired.
 * - X button = Decline (as per TZ: «крестик действует как отказ»).
 * - Expiry 12 months (managed in cookieConsent utility).
 * - Dispatches global event so ConsentManager can react immediately.
 * - Exposes openBanner() via window for the Footer "Настройки cookie" link.
 */
export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  const showBanner = useCallback(() => setIsVisible(true), []);
  const hideBanner = useCallback(() => setIsVisible(false), []);

  useEffect(() => {
    const existing = getConsent();
    if (!existing) {
      const timer = setTimeout(showBanner, 800);
      return () => clearTimeout(timer);
    }
  }, [showBanner]);

  // Expose openBanner globally so Footer "Настройки cookie" can trigger it
  useEffect(() => {
    (window as Window & { __deJureOpenCookieSettings?: () => void }).__deJureOpenCookieSettings = showBanner;
    return () => {
      delete (window as Window & { __deJureOpenCookieSettings?: () => void }).__deJureOpenCookieSettings;
    };
  }, [showBanner]);

  // React to external consent-changed events (e.g., set by another tab)
  useEffect(() => {
    const handler = () => hideBanner();
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, [hideBanner]);

  const handleAccept = () => {
    setConsent('accepted');
    hideBanner();
  };

  const handleDecline = () => {
    setConsent('declined');
    hideBanner();
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
        maxWidth: '460px',
        width: 'calc(100% - 48px)',
        background: '#FFFFFF',
        border: '1px solid rgba(23, 50, 77, 0.12)',
        borderRadius: '8px',
        padding: '20px 24px',
        boxShadow: '0 12px 36px rgba(16, 39, 59, 0.18)',
        zIndex: 9999,
        animation: 'deJureCookieFadeIn 0.4s ease-out'
      }}
    >
      {/* Close / decline button */}
      <button
        onClick={handleDecline}
        aria-label="Закрыть — отклонить необязательные cookie"
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          color: 'rgba(23,50,77,0.4)',
          lineHeight: 1
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Icon + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingRight: '20px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9B7E55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5z" />
            <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" />
          </svg>
          <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-deep-blue, #10273B)', fontFamily: 'var(--font-serif)' }}>
            Использование файлов cookie
          </span>
        </div>

        {/* Text per TZ */}
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary, #55606E)', lineHeight: 1.55, margin: 0 }}>
          Мы используем необходимые файлы cookie для работы сайта, а с вашего согласия — аналитические и другие необязательные cookie.{' '}
          Подробнее —{' '}
          <Link href="/cookies/" style={{ color: 'var(--color-primary, #10273B)', textDecoration: 'underline' }}>
            в Политике использования cookie
          </Link>.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={handleAccept}
            style={{
              padding: '8px 22px',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: '#10273B',
              color: '#FFFFFF',
              border: '1px solid #9B7E55',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
          >
            Принять
          </button>
          <button
            onClick={handleDecline}
            style={{
              padding: '8px 16px',
              fontSize: '13px',
              color: 'var(--color-text-secondary, #55606E)',
              background: 'transparent',
              border: '1px solid rgba(23, 50, 77, 0.2)',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
          >
            Отклонить
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes deJureCookieFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
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
