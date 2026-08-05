import React from 'react';

type TrustItem = {
  icon?: React.ReactNode;
  text: React.ReactNode;
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

export default function TrustStrip({ items, marginTop }: { items: TrustItem[]; marginTop?: string }) {
  if (!items || items.length === 0) return null;
  
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column', 
      gap: '14px', 
      marginTop: marginTop || '20px',
      marginBottom: '24px',
      width: '100%',
      maxWidth: '640px'
    }}>
      {items.map((bullet, i) => (
        <div key={i} style={{ 
          paddingLeft: '16px', 
          borderLeft: '3px solid var(--color-gold)', 
          fontSize: '15px', 
          color: 'var(--color-deep-blue)', 
          lineHeight: 1.45,
          fontWeight: 500,
          whiteSpace: 'pre-line'
        }}>
          {bullet.text}
        </div>
      ))}
    </div>
  );
}

