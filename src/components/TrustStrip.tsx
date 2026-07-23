import React from 'react';

type TrustItem = {
  icon?: React.ReactNode;
  text: string;
};

export default function TrustStrip({ items }: { items: TrustItem[] }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
      gap: '20px', 
      marginTop: '40px' 
    }}>
      {items.map((bullet, i) => (
        <div key={i} style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          padding: '20px 24px',
          boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06), 0 1px 3px rgba(23, 50, 77, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }} className="hover-lift">
          {bullet.icon && (
            <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {bullet.icon}
            </div>
          )}
          <div style={{ color: 'var(--color-deep-blue)', fontSize: '13px', fontWeight: 600, lineHeight: 1.4, whiteSpace: 'pre-line' }}>
            {bullet.text}
          </div>
        </div>
      ))}
    </div>
  );
}
