import React from 'react';

type TrustItem = {
  icon?: React.ReactNode;
  text: string;
};

const defaultIcons = [
  // Icon 1: Profile / Shield
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>,
  // Icon 2: System / Gov / Documents
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18"></path>
    <path d="M9 8h1"></path>
    <path d="M9 12h1"></path>
    <path d="M9 16h1"></path>
    <path d="M14 8h1"></path>
    <path d="M14 12h1"></path>
    <path d="M14 16h1"></path>
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
  </svg>,
  // Icon 3: Contract / Plan
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <polyline points="9 15 11 17 15 13"></polyline>
  </svg>
];

export default function TrustStrip({ items }: { items: TrustItem[] }) {
  if (!items || items.length === 0) return null;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-bullet-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 35px rgba(23, 50, 77, 0.12) !important;
          background: rgba(255, 255, 255, 0.95) !important;
          border-color: var(--color-gold) !important;
        }
        .hero-bullet-item:hover svg {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}} />
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginTop: '32px',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {items.map((bullet, i) => {
          const iconToRender = bullet.icon || defaultIcons[i % defaultIcons.length];
          return (
            <div key={i} className="hero-bullet-item" style={{ 
              flex: '1 1 200px',
              minHeight: '60px',
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px',
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              padding: '14px 20px',
              boxShadow: '0 15px 35px rgba(23, 50, 77, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}>
              <div style={{ 
                color: 'var(--color-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0 
              }}>
                {iconToRender}
              </div>
              <div style={{ color: 'var(--color-deep-blue)', fontSize: '13px', fontWeight: 600, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                {bullet.text}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
