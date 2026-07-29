'use client';

import React from 'react';
import Link from 'next/link';

export interface CaseData {
  category: string;
  title: string;
  problem: string;
  action: string;
  result: string;
  isDemo?: boolean;
}

interface CasesBlockProps {
  cases: CaseData[];
  title?: string;
  showAllLink?: string;
  showDemoWarning?: boolean;
}

export default function CasesBlock({ 
  cases, 
  title = "Результаты нашей работы", 
  showAllLink = "/praktika",
  showDemoWarning = true
}: CasesBlockProps) {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex justify-between" style={{ alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Практика
              </span>
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>
              {title}
            </h2>
          </div>
          {showAllLink && (
            <Link href={showAllLink} className="btn btn-outline" style={{ padding: '12px 24px', height: 'fit-content' }}>
              Смотреть все дела
            </Link>
          )}
        </div>
        
        {showDemoWarning && (
          <div style={{ 
            background: 'var(--color-white)', 
            padding: '16px 24px', 
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-secondary)',
            fontSize: '14px',
            marginBottom: '40px',
            borderLeft: '4px solid var(--color-primary)',
            maxWidth: '800px',
            fontStyle: 'italic'
          }}>
            Внимание: Ниже представлены демонстрационные макеты кейсов. Они будут заменены реальной практикой после утверждения фактуры.
          </div>
        )}
        
        <div className="grid grid-3" style={{ gap: '30px' }}>
          {cases.map((caseItem, idx) => (
            <div key={idx} className="case-card group" style={{ 
              padding: '40px 36px 36px 36px', 
              border: '1px solid var(--color-border)', 
              borderRadius: '0', 
              display: 'flex', 
              flexDirection: 'column', 
              background: 'var(--color-white)',
              boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '0%',
                background: 'var(--color-gold)',
                transition: 'height 0.4s ease'
              }} className="case-accent-line"></div>
              
              {caseItem.isDemo && (
                <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(23, 50, 77, 0.05)', border: '1px solid rgba(23, 50, 77, 0.12)', color: 'var(--color-text-secondary)', padding: '4px 10px', fontSize: '11px', borderRadius: '4px', fontWeight: 500, letterSpacing: '0.02em', zIndex: 2 }}>
                  Демонстрация формата
                </div>
              )}
              
              <div style={{ paddingBottom: '20px', marginBottom: '24px', paddingTop: caseItem.isDemo ? '24px' : '0' }}>
                <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600, paddingRight: caseItem.isDemo ? '140px' : '0' }}>
                  {caseItem.category}
                </span>
                <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>
                  {caseItem.title}
                </h4>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{caseItem.problem}</p>
                </div>
                
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{caseItem.action}</p>
                </div>
              </div>
              
              <div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '0', border: '1px solid rgba(193, 160, 102, 0.2)', borderLeft: '4px solid var(--color-gold)' }}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
                <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                  {caseItem.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .case-card {
          transition: all 0.4s ease;
        }
        .case-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          border-color: transparent;
          transform: translateY(-4px);
        }
        .case-card:hover .case-accent-line {
          height: 100%;
        }
      `}} />
    </section>
  );
}
