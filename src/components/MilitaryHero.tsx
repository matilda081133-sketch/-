import React from 'react';
import TrustStrip from './TrustStrip';

type HeroProps = {
  breadcrumbs?: React.ReactNode;
  superTitle: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryCtaText: React.ReactNode;
  primaryCtaSubtext?: React.ReactNode;
  primaryCtaLink?: string;
  secondaryCtaText?: React.ReactNode;
  secondaryCtaLink?: string;
  urgentHint?: string;
  trustItems?: { icon?: React.ReactNode; text: React.ReactNode }[];
};

import Image from 'next/image';

type ExtendedHeroProps = HeroProps & {
  theme?: 'light' | 'dark'; 
  imageUrl?: string; 
  imageName?: string;
  imageSubtitle?: string;
  trustMarginTop?: string;
  imageMarginTop?: string;
  imageObjectPosition?: string;
  rightContent?: React.ReactNode;
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
  imageSubtitle,
  trustMarginTop,
  imageMarginTop,
  imageObjectPosition,
  rightContent
}: ExtendedHeroProps) {
  const hasRight = Boolean(imageUrl || rightContent);

  return (
    <section className="military-hero-section" style={{ 
      position: 'relative', 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '130px',
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

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '20px' }}>
          {breadcrumbs && (
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
              {breadcrumbs}
            </div>
          )}

          <div className={hasRight ? "grid grid-2 land-hero-grid" : ""} style={{ display: hasRight ? 'grid' : 'flex', flexDirection: hasRight ? 'row' : 'column', gap: '40px', alignItems: 'center' }}>
            {/* Left Column */}
            <div style={{ flex: '1 1 0%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#9B7E55' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-gold-text, #80633F)' }}>
                  {superTitle}
                </span>
              </div>
              
              <h1 className="military-hero-h1" style={{ 
                fontSize: 'clamp(26px, 3.8vw, 50px)', 
                color: 'var(--color-deep-blue)', 
                fontFamily: 'var(--font-serif)', 
                margin: '0 0 16px 0', 
                lineHeight: 1.15 
              }}>
                {title}
              </h1>
              
              <p className="military-hero-subtitle" style={{ 
                fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, 
                marginBottom: '16px', 
                maxWidth: '750px', 
                lineHeight: 1.55 
              }}>
                {subtitle}
              </p>

              {/* Primary Call to Action - IMMEDIATELY AFTER INTRO TEXT */}
              <div className="military-hero-cta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', marginTop: '16px', marginBottom: urgentHint ? '16px' : '24px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
                  <a href={primaryCtaLink} className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '15px', color: '#FFFFFF', backgroundColor: '#10273B', border: '1px solid #9B7E55', boxShadow: '0 4px 14px rgba(16, 39, 59, 0.25)' }} data-analytics="military_hero_consultation_click">
                    {primaryCtaText}
                  </a>
                  {secondaryCtaText && secondaryCtaLink && (
                    <a href={secondaryCtaLink} className="btn btn-outline" style={{ padding: '15px 36px', fontSize: '15px' }}>
                      {secondaryCtaText}
                    </a>
                  )}
                </div>
                {primaryCtaSubtext && (
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    {primaryCtaSubtext}
                  </div>
                )}
              </div>

              {urgentHint && (
                <div style={{
                  background: 'rgba(200, 169, 126, 0.1)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '14px 20px',
                  marginBottom: '20px',
                  fontSize: '14px',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.5
                }}>
                  <strong style={{ display: 'block', marginBottom: '4px' }}>Важно:</strong>
                  {urgentHint}
                </div>
              )}

              {/* Three Bullet USPs (TrustStrip) - NOW PLACED AFTER CTA */}
              {trustItems && trustItems.length > 0 && <TrustStrip items={trustItems} marginTop={trustMarginTop || '16px'} />}
            </div>
            
            {/* Right Column for Photo or Unconstrained Creative */}
            <div className="military-hero-right" style={{ width: '100%', maxWidth: '440px', margin: '0 auto', flexShrink: 0, display: 'flex', flexDirection: 'column', paddingTop: imageMarginTop || 0, marginTop: 0 }}>
              {rightContent ? (
                rightContent
              ) : (
                <div className="hero-photo-hover" style={{ 
                  width: '100%',
                  borderRadius: '0',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 4px 14px rgba(16, 39, 59, 0.12)',
                  zIndex: 1,
                  display: 'block',
                  background: 'transparent'
                }}>
                  {imageUrl ? (
                    <img src={imageUrl} alt={imageName || title?.toString() || 'Специалист'} style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: imageObjectPosition || 'center 20%', display: 'block', filter: 'brightness(1.05)' }} className="hero-photo-img" />
                  ) : (
                    <div style={{ padding: '40px', textAlign: 'center', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>
                      [Фото специалиста]
                    </div>
                  )}
                  {(imageName || imageSubtitle) && (
                    <div style={{
                      padding: '16px 20px',
                      background: 'rgba(255, 255, 255, 0.75)',
                      backdropFilter: 'blur(10px)',
                      borderTop: '3px solid var(--color-gold)',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.9)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.9)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 4px 14px rgba(16, 39, 59, 0.08)'
                    }}>
                      {imageName && (
                        <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '2px', lineHeight: 1.3 }}>
                          {imageName === 'Дмитрий Сергеевич Конопкин' || imageName === 'Конопкин Дмитрий Сергеевич' ? (
                            <>Конопкин <br />Дмитрий Сергеевич</>
                          ) : (
                            imageName
                          )}
                        </div>
                      )}
                      {imageSubtitle && (
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.35 }}>
                          {typeof imageSubtitle === 'string' && imageSubtitle.includes('куратор') ? (
                            <>
                              {imageSubtitle.split('куратор')[0].trim().replace(/,$/, '')},<br />
                              куратор{imageSubtitle.split('куратор')[1]}
                            </>
                          ) : (
                            imageSubtitle
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1440px) {
            .military-hero-section {
              padding-top: 110px !important;
              padding-bottom: 50px !important;
              min-height: auto !important;
            }
            .military-hero-h1 {
              font-size: clamp(24px, 3.4vw, 44px) !important;
              margin-bottom: 12px !important;
            }
            .military-hero-subtitle {
              margin-bottom: 12px !important;
              font-size: 15px !important;
              line-height: 1.5 !important;
            }
            .military-hero-cta {
              margin-top: 12px !important;
              margin-bottom: 16px !important;
            }
          }
          @media (max-width: 768px) {
            .military-hero-section {
              padding-top: 90px !important;
              padding-bottom: 40px !important;
            }
            .military-hero-cta {
              width: 100% !important;
            }
            .military-hero-cta .btn {
              width: 100% !important;
              text-align: center !important;
            }
          }
        `}} />
      </div>
    </section>
  );
}
