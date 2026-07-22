'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Specialization {
  title: string;
  items: string[];
  link?: { url: string; text: string };
}

export default function SpecializationsAccordion({ specializations }: { specializations: Specialization[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {specializations.map((spec, i) => {
        const isOpen = openIndex === i;
        
        return (
          <div 
            key={i}
            className="spec-modern-item" 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              padding: '40px 0', 
              borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
              cursor: 'pointer',
              gap: '30px',
              transition: 'all 0.4s ease'
            }}
            onClick={() => toggleAccordion(i)}
          >
            <div style={{ fontSize: '18px', color: 'var(--color-gold)', fontWeight: 600, fontFamily: 'var(--font-serif)', marginTop: '4px' }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 className="spec-title" style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginBottom: isOpen ? '20px' : '0', transition: 'all 0.3s ease', fontFamily: 'var(--font-serif)' }}>
                {spec.title}
              </h3>
              
              <div style={{
                maxHeight: isOpen ? '1000px' : '0',
                opacity: isOpen ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}>
                <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                  {spec.items.map((item, j) => (
                    <li className="spec-desc" key={j} style={{ color: 'var(--color-text-secondary)', fontSize: '15px', position: 'relative', paddingLeft: '20px', transition: 'all 0.3s ease' }}>
                      <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {spec.link && (
                  <div style={{ marginTop: '24px' }}>
                    <Link href={spec.link.url} className="btn btn-outline" style={{ display: 'inline-block', padding: '10px 24px', fontSize: '14px' }}>
                      {spec.link.text}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="spec-arrow-wrap" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              width: '40px', height: '40px', borderRadius: '50%', 
              border: '1px solid rgba(23,50,77,0.1)', transition: 'all 0.4s ease', flexShrink: 0,
              transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              background: isOpen ? 'var(--color-primary)' : 'transparent',
              borderColor: isOpen ? 'var(--color-primary)' : 'rgba(23,50,77,0.1)'
            }}>
              <svg className="spec-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke={isOpen ? 'var(--color-white)' : 'var(--color-deep-blue)'} 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                style={{ transition: 'all 0.4s ease' }}
              >
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
