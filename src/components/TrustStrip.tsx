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
          .trust-strip-container {
            display: flex;
            flex-wrap: nowrap;
            gap: 12px;
            margin-top: -20px;
          }
          @media (max-width: 900px) {
            .trust-strip-container {
              flex-wrap: wrap;
            }
          }
        `}} />
      <div className="trust-strip-container">
        {items.map((bullet, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            padding: '12px 16px',
            boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06), 0 1px 3px rgba(23, 50, 77, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            flex: '1 1 0'
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
    </>
  );
}
