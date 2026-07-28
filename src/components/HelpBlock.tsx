import React from 'react';

interface HelpItem {
  title: string;
  desc?: string;
}

interface HelpBlockProps {
  title?: string;
  subtitle?: string;
  items: HelpItem[];
}

export default function HelpBlock({ 
  title = "Чем может помочь адвокат", 
  subtitle, 
  items 
}: HelpBlockProps) {
  return (
    <section className="section" style={{ background: 'var(--gradient-cream)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: subtitle ? '16px' : '40px' }}>
          {title}
        </h2>
        
        {subtitle && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}
        
        <div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
            {/* Вертикальная линия, соединяющая круги */}
            <div style={{ position: 'absolute', left: '29px', top: '30px', bottom: '30px', width: '2px', background: 'var(--color-border)', zIndex: 0 }}></div>
            
            {items.map((item, i) => (
              <div key={i} className="process-step-item" style={{ display: 'flex', gap: '20px', position: 'relative', zIndex: 1, transition: 'transform 0.4s ease' }}>
                
                <div className="process-step-circle" style={{ flexShrink: 0, width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '300', fontSize: '24px', fontFamily: 'var(--font-serif)', boxShadow: '0 10px 20px rgba(23, 50, 77, 0.05)', position: 'relative', transition: 'all 0.4s ease' }}>
                  {i + 1}
                  <div className="process-step-inner" style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed rgba(193, 160, 102, 0.3)', transition: 'all 0.4s ease' }}></div>
                </div>
                
                <div style={{ paddingTop: '16px' }}>
                  <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: item.desc ? '8px' : '0', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>
                    {item.title}
                  </h4>
                  {item.desc && (
                    <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', minHeight: '300px' }} className="d-none d-md-block">
            <img 
              src="/-/images/team.jpg" 
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(23, 50, 77, 0.2), transparent)' }}></div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .process-step-item:hover {
            transform: translateX(10px);
          }
          .process-step-item:hover .process-step-circle {
            background: var(--color-gold);
            color: var(--color-white);
            border-color: var(--color-gold);
          }
          .process-step-item:hover .process-step-inner {
            border-color: rgba(255, 255, 255, 0.5);
          }
        `}} />
      </div>
    </section>
  );
}
