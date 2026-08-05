import React from 'react';

interface CtaCardProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CtaCard({ 
  title, 
  subtitle, 
  buttonText = "Описать ситуацию", 
  buttonLink = "#form",
  className = "",
  style = {}
}: CtaCardProps) {
  const isDark = style?.background === 'var(--color-deep-blue)' || style?.backgroundColor === 'var(--color-deep-blue)' || className.includes('cta-banner-card');

  return (
    <div className={`cta-card ${className}`} style={{ 
      marginTop: '40px', 
      background: 'var(--color-white)', 
      borderTop: '4px solid var(--color-primary)', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.02)', 
      padding: '40px', 
      borderRadius: '0px', 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '32px', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      ...style
    }}>
      <div style={{ flex: '1 1 400px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '16px', fontFamily: 'var(--font-serif)', color: isDark ? 'var(--color-white)' : 'var(--color-deep-blue)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '16px', color: isDark ? 'rgba(255,255,255,0.85)' : 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, textWrap: 'balance' }}>
          {subtitle}
        </p>
      </div>
      <div>
        <a href={buttonLink} className={isDark ? "btn white-btn-custom" : "btn btn-primary"} style={{ padding: '16px 40px', display: 'inline-block' }}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

