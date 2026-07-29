import React from 'react';
import TrustStrip from './TrustStrip';

type HeroProps = {
  breadcrumbs?: React.ReactNode;
  superTitle: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryCtaText: string;
  primaryCtaSubtext?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  urgentHint?: string;
  trustItems?: { icon?: React.ReactNode; text: string }[];
};

import Image from 'next/image';

type ExtendedHeroProps = HeroProps & {
  theme?: 'light' | 'dark'; 
  imageUrl?: string; 
  imageName?: string;
  imageSubtitle?: string;
};

export default function MilitaryHero({
  breadcrumbs,
  superTitle,
  title,
  subtitle,
  primaryCtaText,
  primaryCtaSubtext,
  primaryCtaLink = '#form',
  secondaryCtaText,
  secondaryCtaLink,
  urgentHint,
  trustItems = [],
  imageUrl,
  imageName,
  imageSubtitle
}: ExtendedHeroProps) {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '100px',
      paddingBottom: '80px',
      background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)',
      overflow: 'hidden'
    }}>
      {/* Decorative circle */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0
      }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className={imageUrl ? "grid grid-2" : ""} style={{ display: imageUrl ? 'grid' : 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-start', ...(imageUrl && { gridTemplateColumns: '1.3fr 0.7fr' }) }}>
            {/* Left Column */}
            <div style={{ flex: '1 1 0%', paddingTop: '80px' }}>
              {breadcrumbs && (
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                  {breadcrumbs}
                </div>
              )}
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

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', marginTop: '48px', marginBottom: urgentHint ? '24px' : '32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
                  <a href={primaryCtaLink} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '15px' }} data-analytics="military_hero_consultation_click">
                    {primaryCtaText}
                  </a>
                  {secondaryCtaText && secondaryCtaLink && (
                    <a href={secondaryCtaLink} className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '15px' }}>
                      {secondaryCtaText}
                    </a>
                  )}
                </div>
                {primaryCtaSubtext && (
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                    {primaryCtaSubtext}
                  </div>
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

              {trustItems && trustItems.length > 0 && <TrustStrip items={trustItems} />}
            </div>
            
            {/* Right Column for Photo */}
            <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: breadcrumbs ? '122px' : '80px', marginTop: 0 }}>
              <div style={{ 
                width: '100%', 
                aspectRatio: '3/4', 
                backgroundColor: 'var(--color-white)', 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                fontSize: '14px',
                border: '1px solid var(--color-border)',
                position: 'relative'
              }} className="hero-photo-hover">
                {imageUrl ? (
                  <img src={imageUrl} alt={imageName || title?.toString() || 'Специалист'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} className="hero-photo-img" />
                ) : (
                  <span style={{ padding: '20px', textAlign: 'center', fontStyle: 'italic' }}>
                    [Фото специалиста]
                  </span>
                )}
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                .hero-photo-hover {
                  transition: all 0.4s ease;
                }
                .hero-photo-hover:hover {
                  box-shadow: 0 20px 40px rgba(23, 50, 77, 0.15);
                  transform: translateY(-4px);
                }
              `}} />
              {(imageName || imageSubtitle) && (
                <div>
                  {imageName && <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>{imageName}</div>}
                  {imageSubtitle && <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>{imageSubtitle}</div>}
                </div>
              )}
            </div>
          </div>
        </div>
    </section>
  );
}
