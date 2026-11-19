'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

function checkIsEnded(endsAtIso?: string): boolean {
  if (!endsAtIso) return false;
  const endMs = Date.parse(endsAtIso);
  if (Number.isNaN(endMs)) return false;
  return Date.now() >= endMs;
}

export function NewsCardArchiveBadge({
  endsAtIso,
  badgeText = 'Мероприятие завершено',
}: {
  endsAtIso?: string;
  badgeText?: string;
}) {
  const [ended, setEnded] = useState<boolean>(() => checkIsEnded(endsAtIso));

  useEffect(() => {
    setEnded(checkIsEnded(endsAtIso));
  }, [endsAtIso]);

  if (!ended) return null;

  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--color-deep-blue)',
        background: '#EAF1F6',
        border: '1px solid rgba(23, 50, 77, 0.14)',
        padding: '3px 10px',
        lineHeight: 1.4,
      }}
    >
      {badgeText}
    </span>
  );
}

export function NewsEventArchiveNotice({
  endsAtIso,
  noticeText,
}: {
  endsAtIso?: string;
  noticeText?: string;
}) {
  const [ended, setEnded] = useState<boolean>(() => checkIsEnded(endsAtIso));

  useEffect(() => {
    setEnded(checkIsEnded(endsAtIso));
  }, [endsAtIso]);

  if (!ended || !noticeText) return null;

  return (
    <div
      role="status"
      style={{
        marginBottom: '26px',
        padding: '14px 18px',
        background: '#EAF1F6',
        borderLeft: '4px solid var(--color-primary)',
        fontSize: '15px',
        fontWeight: 600,
        color: 'var(--color-deep-blue)',
        lineHeight: 1.5,
      }}
    >
      {noticeText}
    </div>
  );
}

export function NewsBookingActionBlock({
  endsAtIso,
  promptText,
  buttonLabel,
  phoneDisplay,
  phoneHref,
  directionsLabel,
  directionsHref,
}: {
  endsAtIso?: string;
  promptText: string;
  buttonLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  directionsLabel?: string;
  directionsHref?: string;
}) {
  const [ended, setEnded] = useState<boolean>(() => checkIsEnded(endsAtIso));

  useEffect(() => {
    setEnded(checkIsEnded(endsAtIso));
  }, [endsAtIso]);

  if (ended) {
    return directionsHref && directionsLabel ? (
      <div style={{ marginTop: '18px' }}>
        <Link href={directionsHref} className="news-directions-link">
          <span>{directionsLabel}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    ) : null;
  }

  return (
    <div
      style={{
        marginTop: '24px',
        padding: 'clamp(20px, 3.2vw, 28px)',
        background: 'var(--color-cream)',
        border: '1px solid rgba(23, 50, 77, 0.12)',
        borderLeft: '4px solid var(--color-primary)',
      }}
    >
      <p
        style={{
          fontSize: '16px',
          color: 'var(--color-deep-blue)',
          lineHeight: 1.6,
          margin: '0 0 20px 0',
        }}
      >
        {promptText}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '14px 22px',
        }}
      >
        <a
          href={phoneHref}
          className="btn btn-primary news-call-btn"
          style={{
            minHeight: '48px',
            padding: '13px 26px',
            fontSize: '15px',
            fontWeight: 600,
            borderRadius: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          {buttonLabel}
        </a>

        <a
          href={phoneHref}
          className="news-phone-text-link"
          style={{
            minHeight: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '17px',
            fontWeight: 700,
            color: 'var(--color-deep-blue)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}
        >
          {phoneDisplay}
        </a>
      </div>

      {directionsHref && directionsLabel && (
        <div style={{ marginTop: '16px' }}>
          <Link href={directionsHref} className="news-directions-link">
            <span>{directionsLabel}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
