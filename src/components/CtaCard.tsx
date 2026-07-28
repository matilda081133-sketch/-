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
  return (
    <div className={`cta-card ${className}`} style={{ 
      marginTop: '40px', 
      background: 'var(--color-white)', 
      borderTop: '4px solid var(--color-primary)', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.02)', 
      padding: '40px', 
      borderRadius: '4px', 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '32px', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      ...style
    }}>
      <div style={{ flex: '1 1 400px' }}>
        <h3 style={{ fontSize: '24px', marginBottom: '16px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
          {title}
        </h3>
        <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, textWrap: 'balance' }}>
          {subtitle}
        </p>
      </div>
      <div>
        <a href={buttonLink} className="btn btn-primary" style={{ padding: '16px 40px', display: 'inline-block' }}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}
