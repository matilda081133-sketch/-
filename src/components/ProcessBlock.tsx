'use client';

import React from 'react';

export interface ProcessStep {
  num?: string;
  title: string | React.ReactNode;
  desc: string | React.ReactNode;
  isBanner?: boolean;
}

interface ProcessBlockProps {
  title?: string | React.ReactNode;
  subtitle?: React.ReactNode;
  steps: ProcessStep[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  alignTitle?: 'left' | 'center';
  footerNote?: string;
}

export default function ProcessBlock({
  title = "Что происходит после обращения",
  subtitle = "Каждое судебное дело уникально, но наш подход всегда остается системным. Прозрачный процесс работы от первой юридической консультации и досудебного урегулирования до вынесения итогового решения суда.",
  steps,
  ctaTitle = "Начните с первичного обращения",
  ctaSubtitle = "Кратко опишите ситуацию — мы уточним обстоятельства, скажем, какие документы потребуются, и определим следующий шаг.",
  ctaButtonText = "Обсудить ситуацию",
  ctaButtonHref = "#consultation",
  alignTitle = 'center',
  footerNote
}: ProcessBlockProps) {
  // Determine grid class based on number of steps
  let gridClass = "grid grid-3";
  if (steps.length === 5) {
    gridClass = "grid grid-5";
  } else if (steps.length === 4 || steps.length === 8) {
    gridClass = "grid grid-4";
  } else if (steps.length === 2) {
    gridClass = "grid grid-2";
  }

  return (
    <section className="section bg-light" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--color-white)' }}>
      {/* Organic graphic background */}
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 0% 0%, rgba(193, 160, 102, 0.04) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(23, 50, 77, 0.03) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: alignTitle, marginBottom: '50px' }}>
          <h2 className={alignTitle === 'left' ? 'with-accent' : ''} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textAlign: alignTitle }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          {steps.length === 5 && !steps.some(s => s.isBanner) ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {/* Ряд 1: 3 этапа */}
              <div className="grid grid-3" style={{ gap: '40px' }}>
                {steps.slice(0, 3).map((step, i) => (
                  <div key={i} style={{ 
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent',
                    padding: '10px'
                  }} className="stage-item">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                      <div style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #FBF8F3 100%)', 
                        border: '2px solid var(--color-gold)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'var(--color-deep-blue)', 
                        fontWeight: 700, 
                        fontSize: '20px', 
                        fontFamily: 'var(--font-serif)', 
                        boxShadow: '0 4px 14px rgba(16, 39, 59, 0.12)', 
                        position: 'relative' 
                      }}>
                        {step.num || String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', lineHeight: 1.3, textAlign: 'center' }}>
                      {typeof step.title === 'string' ? step.title.replace(/^\d+\.\s*/, '') : step.title}
                    </h3>
                    <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textAlign: 'center', whiteSpace: 'pre-line' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ряд 2: 2 этапа по центру */}
              <div className="grid grid-2" style={{ gap: '40px', maxWidth: '780px', margin: '0 auto', width: '100%' }}>
                {steps.slice(3, 5).map((step, i) => (
                  <div key={i + 3} style={{ 
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent',
                    padding: '10px'
                  }} className="stage-item">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                      <div style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #FBF8F3 100%)', 
                        border: '2px solid var(--color-gold)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'var(--color-deep-blue)', 
                        fontWeight: 700, 
                        fontSize: '20px', 
                        fontFamily: 'var(--font-serif)', 
                        boxShadow: '0 4px 14px rgba(16, 39, 59, 0.12)', 
                        position: 'relative' 
                      }}>
                        {step.num || String(i + 4).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', lineHeight: 1.3, textAlign: 'center' }}>
                      {typeof step.title === 'string' ? step.title.replace(/^\d+\.\s*/, '') : step.title}
                    </h3>
                    <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textAlign: 'center', whiteSpace: 'pre-line' }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={gridClass} style={{ gap: '40px' }}>
              {steps.map((step, i) => 
                step.isBanner ? (
                  <div key={i} style={{ 
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                    border: '1px solid var(--color-border)', 
                    borderLeft: '4px solid var(--color-primary)', 
                    padding: '28px 24px', 
                    boxShadow: '0 4px 12px rgba(23, 50, 77, 0.05)',
                    height: '100%'
                  }} className="stage-banner-item">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', alignItems: 'center', textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: 0, fontFamily: 'var(--font-serif)', lineHeight: 1.3, fontWeight: 700, whiteSpace: 'pre-line', textAlign: 'center' }}>
                          {step.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key={i} style={{ 
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent',
                    padding: '10px'
                  }} className="stage-item">
                    
                    {/* Organic Number / Dot */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                      <div style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #FBF8F3 100%)', 
                        border: '2px solid var(--color-gold)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'var(--color-deep-blue)', 
                        fontWeight: 700, 
                        fontSize: '20px', 
                        fontFamily: 'var(--font-serif)', 
                        boxShadow: '0 4px 14px rgba(16, 39, 59, 0.12)', 
                        position: 'relative' 
                      }}>
                        {step.num || String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', lineHeight: 1.3, textAlign: 'center' }}>
                      {typeof step.title === 'string' ? step.title.replace(/^\d+\.\s*/, '') : step.title}
                    </h3>
                    <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textAlign: 'center', whiteSpace: 'pre-line' }}>
                      {step.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
          
          {/* CTA inside Process Block */}
          {ctaTitle && (
            <div className="process-cta-banner" style={{ 
              marginTop: '40px', 
              background: 'var(--color-deep-blue)', 
              padding: '38px 40px',
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
              boxShadow: '0 10px 18px -2px rgba(11, 28, 42, 0.38), 0 4px 8px -2px rgba(0, 0, 0, 0.25)'
            }}>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '24px', color: 'var(--color-white)', marginBottom: '10px', fontWeight: '600', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>
                  {ctaTitle}
                </h3>
                {ctaSubtitle && (
                  <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
                    {ctaSubtitle}
                  </p>
                )}
              </div>
              <a href={ctaButtonHref} className="btn btn-light" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>{ctaButtonText}</a>
            </div>
          )}
          {footerNote && (
            <p style={{
              marginTop: '32px',
              textAlign: 'center',
              color: 'var(--color-text-secondary)',
              fontSize: '15px',
              lineHeight: 1.6,
              maxWidth: '900px',
              marginInline: 'auto'
            }}>
              {footerNote}
            </p>
          )}

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html:`
      .stage-item {
        transition: transform 0.4s ease;
      }
      .stage-item::after {
        content: '';
        position: absolute;
        top: 40px;
        left: 50%;
        width: calc(100% + 40px);
        height: 1px;
        border-top: 1px dashed rgba(193, 160, 102, 0.5);
        z-index: -1;
      }
      .grid-5 .stage-item:nth-child(5n)::after { display: none; }
      .grid-3 .stage-item:nth-child(3n)::after { display: none; }
      .grid-4 .stage-item:nth-child(4n)::after { display: none; }
      .grid-2 .stage-item:nth-child(2n)::after { display: none; }
      .stage-item:last-child::after { display: none; }
      
      .stage-item:hover {
        transform: translateY(-8px);
      }
      .stage-item:hover > div > div {
        background: var(--color-primary) !important;
        color: var(--color-white) !important;
        box-shadow: 0 15px 30px rgba(193, 160, 102, 0.3) !important;
      }
      .stage-item > div > div {
        transition: all 0.4s ease;
      }
      `}} />
    </section>
  );
}

