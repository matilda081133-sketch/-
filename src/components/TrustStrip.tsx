import React from 'react';

type TrustItem = {
  icon?: React.ReactNode;
  text: string;
};

const defaultIcons = [
  // Icon 1: Shield check
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>,
  // Icon 2: Document check
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="m9 15 2 2 4-4"/>
  </svg>,
  // Icon 3: Contract / Award badge
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
];

export default function TrustStrip({ items }: { items: TrustItem[] }) {
  if (!items || items.length === 0) return null;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-bullet-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 30px rgba(23, 50, 77, 0.12) !important;
          background: rgba(255, 255, 255, 0.95) !important;
          border-color: var(--color-gold) !important;
        }
        .hero-bullet-item:hover .hero-bullet-icon {
          transform: scale(1.06);
          background: var(--color-gold) !important;
          color: #ffffff !important;
          border-color: var(--color-gold) !important;
        }
      `}} />
      <div style={{ 
        display: 'flex', 
        gap: '16px', 
        marginTop: '24px',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {items.map((bullet, i) => {
          const iconToRender = bullet.icon || defaultIcons[i % defaultIcons.length];
          return (
            <div key={i} className="hero-bullet-item" style={{ 
              flex: '1 1 200px',
              minHeight: '64px',
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              padding: '12px 18px',
              boxShadow: '0 12px 28px rgba(23, 50, 77, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}>
              <div className="hero-bullet-icon" style={{ 
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(197, 160, 89, 0.12)',
                border: '1px solid rgba(197, 160, 89, 0.28)',
                color: 'var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}>
                {iconToRender}
              </div>
              <div style={{ color: 'var(--color-deep-blue)', fontSize: '13.5px', fontWeight: 600, lineHeight: 1.35, whiteSpace: 'pre-line' }}>
                {bullet.text}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
