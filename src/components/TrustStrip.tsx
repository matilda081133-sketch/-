import React from 'react';

type TrustItem = {
  icon?: React.ReactNode;
  text: string;
};

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
        marginTop: '40px',
        flexWrap: 'wrap'
      }}>
        {items.map((bullet, i) => (
          <div key={i} className="hero-bullet-item" style={{ 
            flex: '1 1 200px',
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            padding: '20px 24px',
            boxShadow: '0 15px 35px rgba(23, 50, 77, 0.04)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease',
            cursor: 'default'
          }}>
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
    </>
  );
}
