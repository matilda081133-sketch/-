import React from 'react';
import TrustStrip from './TrustStrip';

type HeroProps = {
  breadcrumbs?: React.ReactNode;
  superTitle: string;
  title: React.ReactNode;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  urgentHint?: string;
  trustItems: { icon?: React.ReactNode; text: string }[];
};

export default function MilitaryHero({
  breadcrumbs,
  superTitle,
  title,
  subtitle,
  primaryCtaText,
  primaryCtaLink = '#form',
  secondaryCtaText,
  secondaryCtaLink,
  urgentHint,
  trustItems
}: HeroProps) {
  return (
    <div style={{ background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)' }}>
      <section style={{ 
        position: 'relative',
        paddingTop: '160px', 
        paddingBottom: '80px'
      }}>
        {/* Decorative circle container */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute', top: '-20%', left: '-5%', width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)',
            borderRadius: '50%', zIndex: 0
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {breadcrumbs && (
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
              {breadcrumbs}
            </div>
          )}
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#9B7E55' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: '#9B7E55' }}>
                {superTitle}
              </span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(36px, 5vw, 56px)', 
              color: 'var(--color-deep-blue)', 
              fontFamily: 'var(--font-serif)', 
              margin: '0 0 32px 0', 
              lineHeight: 1.1 
            }}>
              {title}
            </h1>
            
            <p style={{ 
              fontSize: '18px', 
              color: 'var(--color-text-secondary)', 
              marginBottom: '40px', 
              maxWidth: '750px', 
              lineHeight: 1.6 
            }}>
              {subtitle}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: urgentHint ? '32px' : '48px' }}>
              <a href={primaryCtaLink} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '15px' }}>
                {primaryCtaText}
              </a>
              {secondaryCtaText && secondaryCtaLink && (
                <a href={secondaryCtaLink} className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '15px' }}>
                  {secondaryCtaText}
                </a>
              )}
            </div>

            {urgentHint && (
              <div style={{
                background: 'rgba(200, 169, 126, 0.1)',
                borderLeft: '4px solid var(--color-gold)',
                padding: '16px 24px',
                marginBottom: '48px',
                fontSize: '15px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.5
              }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Важно:</strong>
                {urgentHint}
              </div>
            )}

            <TrustStrip items={trustItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
