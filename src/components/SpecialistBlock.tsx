'use client';

import React from 'react';

import Image from 'next/image';

export interface SpecialistBlockProps {
  title?: string;
  name: string;
  position: string;
  description: (string | React.ReactNode)[];
  photoPlaceholder?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function SpecialistBlock({
  title = "Специалист",
  name,
  position,
  description,
  photoPlaceholder = "[Фото специалиста]",
  imageUrl,
  buttonText = "Задать вопрос специалисту",
  buttonHref = "#consultation"
}: SpecialistBlockProps) {
  return (
    <section className="section bg-white" id="specialist">
      <div className="container">
        {title && (
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>
            {title}
          </h2>
        )}
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '40px', 
          background: 'var(--color-cream)',
          padding: '40px',
          borderRadius: '0', // Unifying rounded corners to 0 for consistency with the premium theme
          borderTop: '4px solid var(--color-primary)'
        }} className="md:flex-row md:items-center">
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
                <Image src={imageUrl} alt={name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 500px" />
              ) : (
                <span style={{ padding: '20px', textAlign: 'center', fontStyle: 'italic' }}>
                  {photoPlaceholder}
                </span>
              )}
            </div>
          </div>
          
          <div style={{ flex: '1 1 0%' }}>
            <h3 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', marginBottom: '12px', fontFamily: 'var(--font-serif)' }}>
              {name}
            </h3>
            <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {position}
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              {description.map((paragraph, idx) => (
                <p key={idx} style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: idx === description.length - 1 ? 0 : '16px' }}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <a 
              href={buttonHref} 
              className="btn btn-primary"
            >
              {buttonText}
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
