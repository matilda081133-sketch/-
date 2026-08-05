import React from 'react';

interface HelpListCardProps {
  title: string;
  items: string[];
  className?: string;
}

export default function HelpListCard({ title, items, className = '' }: HelpListCardProps) {
  return (
    <div className={`help-list-card ${className}`} style={{ background: 'var(--gradient-cream)', padding: '40px', borderLeft: '4px solid var(--color-gold)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-10px', right: '20px', color: 'var(--color-gold)', opacity: 0.1 }}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px', position: 'relative', zIndex: 1, marginTop: 0 }}>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 1 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: '16px', fontSize: '15px', color: 'var(--color-deep-blue)', alignItems: 'flex-start', lineHeight: 1.5 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

