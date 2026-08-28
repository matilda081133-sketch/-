'use client';

import React from 'react';

import Image from 'next/image';

export interface SpecialistBlockProps {
  title?: string | React.ReactNode;
  name: string;
  position: string | React.ReactNode;
  description: (string | React.ReactNode)[];
  photoPlaceholder?: string;
  imageUrl?: string;
  imagePosition?: string;
  buttonText?: string;
  buttonHref?: string;
  profileHref?: string;
  profileText?: string;
}

export default function SpecialistBlock({
  title = "Специалист",
  name,
  position,
  description,
  photoPlaceholder = "[Фото специалиста]",
  imageUrl,
  imagePosition,
  buttonText = "Задать вопрос специалисту",
  buttonHref = "#consultation",
  profileHref,
  profileText
}: SpecialistBlockProps) {
  return (
    <section className="section bg-white" id="specialist">
      <div className="container">
        {title && (
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>
            {title}
          </h2>
        )}
        
        <div className="specialist-grid" style={{ 
          background: 'var(--color-cream)',
          padding: '40px',
          borderRadius: '0', // Unifying rounded corners to 0 for consistency with the premium theme
          borderTop: '4px solid var(--color-primary)'
        }}>
          <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto', flexShrink: 0 }}>
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
            }}>
              {imageUrl ? (
                profileHref ? (
                  <a href={profileHref} style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img 
                      src={imageUrl} 
                      alt={name} 
                      width={500}
                      height={667}
                      loading="lazy"
                      decoding="async"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        objectPosition: imagePosition || 'center 15%', 
                        display: 'block',
                        aspectRatio: '3/4'
                      }} 
                    />
                  </a>
                ) : (
                  <img 
                    src={imageUrl} 
                    alt={name} 
                    width={500}
                    height={667}
                    loading="lazy"
                    decoding="async"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: imagePosition || 'center 15%', 
                      display: 'block',
                      aspectRatio: '3/4'
                    }} 
                  />
                )
              ) : (
                <span style={{ padding: '20px', textAlign: 'center', fontStyle: 'italic' }}>
                  {photoPlaceholder}
                </span>
              )}
            </div>
          </div>
          
          <div style={{ flex: '1 1 0%' }}>
            <h3 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', marginBottom: '12px', fontFamily: 'var(--font-serif)' }}>
              {profileHref ? (
                <a href={profileHref} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>
            <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'pre-line' }}>
              {position}
            </div>
            
            <div style={{ marginBottom: profileHref ? '20px' : '32px' }}>
              {description.map((paragraph, idx) => (
                <div key={idx} style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, marginBottom: idx === description.length - 1 ? 0 : '16px' }}>
                  {paragraph}
                </div>
              ))}
            </div>

            {profileHref && (
              <div style={{ marginBottom: '28px' }}>
                <a 
                  href={profileHref} 
                  style={{ 
                    fontSize: '15px', 
                    color: 'var(--color-primary)', 
                    fontWeight: 600,
                    textDecoration: 'underline', 
                    textUnderlineOffset: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {profileText || `Подробнее о специалисте →`}
                </a>
              </div>
            )}
            
            <a 
              href={buttonHref} 
              className="btn btn-primary"
            >
              {buttonText}
            </a>
          </div>
          
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .specialist-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .specialist-grid {
            grid-template-columns: 400px 1fr;
            gap: 60px;
          }
        }
      `}} />
    </section>
  );
}

