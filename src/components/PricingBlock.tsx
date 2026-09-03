'use client';
import React from 'react';

export interface PricingFeature {
  name: string | React.ReactNode;
  value: string;
}

export interface PricingTier {
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  popular?: boolean;
  badgeText?: string;
  price?: string;
  features: PricingFeature[];
  buttonText?: string;
  buttonHref?: string;
}

interface PricingBlockProps {
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  disclaimer?: string | React.ReactNode;
  guaranteeText?: string;
  sectionStyle?: React.CSSProperties;
}

export default function PricingBlock({
  title = "Стоимость юридических услуг в Липецке",
  subtitle = "Честные цены, закрепленные в договоре. Никаких скрытых платежей.",
  tiers: propTiers,
  ctaTitle = "Точную стоимость определим до начала работы",
  ctaSubtitle = "Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами.",
  ctaButtonText = "Получить расчёт стоимости",
  ctaButtonLink = "#form",
  disclaimer,
  guaranteeText,
  sectionStyle
}: PricingBlockProps) {
  const defaultTiers: PricingTier[] = [
    {
      title: 'Гражданам',
      subtitle: 'Защита личных интересов',
      popular: false,
      price: 'от 2 000 ₽',
      features: [
        { name: 'Юридическая консультация', value: '2 000 ₽' },
        { name: 'Составление и подача иска', value: 'от 10 000 ₽' },
        { name: 'Ведение дела в суде Липецка', value: 'от 15 000 ₽' },
        { name: 'Апелляционная жалоба', value: 'от 20 000 ₽' },
        { name: 'Ознакомление с материалами', value: '4 000 ₽/том' }
      ]
    },
    {
      title: 'Бизнесу',
      subtitle: 'Комплексное юридическое сопровождение',
      popular: true,
      price: 'от 5 000 ₽',
      features: [
        { name: 'Консультация для бизнеса', value: '5 000 ₽' },
        { name: 'Разработка договоров', value: 'от 10 000 ₽' },
        { name: 'Досудебная претензионная работа', value: 'от 15 000 ₽' },
        { name: 'Представительство в Арбитраже', value: 'от 15 000 ₽' },
        { name: 'Правовой аудит документов', value: 'от 10 000 ₽' }
      ]
    },
    {
      title: 'Документы и консалтинг',
      subtitle: 'Глубокая правовая аналитика',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Письменная правовая оценка', value: 'от 30 000 ₽' },
        { name: 'Официальное заключение юриста', value: 'от 35 000 ₽' },
        { name: 'Участие в деловых переговорах', value: '15 000 ₽' },
        { name: 'Защита интересов в госорганах', value: '15 000 ₽' },
        { name: 'Разработка внутренних регламентов', value: 'от 15 000 ₽' }
      ]
    }
  ];

  const tiers = propTiers || defaultTiers;

  return (
    <section id="pricing" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--gradient-cream)', ...sectionStyle }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ 
            marginTop: 0, 
            fontSize: 'clamp(32px, 4vw, 42px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            marginBottom: '20px'
          }}>
            {title}
          </h2>
          <p style={{ 
            fontSize: '16px', 
            color: 'var(--color-deep-blue)',
            opacity: 0.9,
            fontWeight: 500,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {subtitle}
          </p>
        </div>

        <div 
          className={tiers.length === 4 ? "grid grid-4" : tiers.length >= 3 ? "grid grid-3" : "grid grid-2"} 
          style={{ 
            display: 'grid',
            gridTemplateColumns: tiers.length === 4 ? 'repeat(4, minmax(0, 1fr))' : tiers.length >= 3 ? 'repeat(3, minmax(0, 1fr))' : 'repeat(2, minmax(0, 1fr))',
            gap: tiers.length === 4 ? '16px' : '30px', 
            alignItems: 'stretch',
            maxWidth: tiers.length === 2 ? '850px' : 'none',
            margin: tiers.length === 2 ? '0 auto' : '0',
            width: '100%'
          }}
        >
          {tiers.map((tier, idx) => (
            <div key={idx} style={{
              background: tier.popular ? 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)' : 'var(--color-white)',
              color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)',
              borderRadius: '0',
              padding: tiers.length === 4 ? '32px 16px' : '40px 30px',
              boxShadow: tier.popular ? '0 20px 40px rgba(16, 39, 59, 0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
              border: tier.popular ? '1px solid transparent' : '1px solid rgba(23, 50, 77, 0.1)',
              position: 'relative',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              minWidth: 0,
              boxSizing: 'border-box'
            }}
            className="pricing-tier-card"
            >
              {tier.popular && Boolean(tier.badgeText) && (
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'var(--color-white)',
                  color: 'var(--color-deep-blue)',
                  padding: '6px 16px',
                  borderRadius: '0',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {tier.badgeText}
                </div>
              )}
              
              <div style={{ minHeight: '185px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: '24px' }}>
                <h3 style={{ fontSize: tiers.length === 4 ? '20px' : '22px', margin: '0 0 8px 0', color: 'inherit', textAlign: 'center', lineHeight: 1.3 }}>{tier.title}</h3>
                <p style={{ fontSize: '14px', opacity: 0.8, margin: '0 0 12px 0', textAlign: 'center', lineHeight: 1.5 }}>{tier.subtitle}</p>
                
                {tier.price && (
                  <div style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginTop: 'auto', textAlign: 'center' }}>
                    {tier.price}
                  </div>
                )}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', fontSize: '13px', opacity: 0.9 }}>
                    <div style={{ display: 'flex', gap: '8px', flex: '1 1 0%', minWidth: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={tier.popular ? "rgba(255,255,255,0.5)" : "var(--color-primary)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span style={{ lineHeight: 1.35, wordBreak: 'break-word' }}>{feature.name}</span>
                    </div>
                    <span style={{ fontWeight: 600, whiteSpace: 'nowrap', color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)' }}>{feature.value}</span>
                  </li>
                ))}
              </ul>

              <a href={tier.buttonHref || "#form"} className={`btn ${tier.popular ? 'btn-popular' : 'btn-regular'}`} style={{ 
                width: '100%', 
                textAlign: 'center',
                borderRadius: '0',
                fontSize: '15px',
                padding: '14px 16px',
                whiteSpace: 'normal',
                textWrap: 'balance',
                lineHeight: 1.3,
                minHeight: '52px'
              }}>
                {tier.buttonText || 'Узнать точную стоимость'}
              </a>
            </div>
          ))}
        </div>

        {(disclaimer || guaranteeText) && (
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {disclaimer && (
              <p style={{ color: 'var(--color-deep-blue)', fontSize: '14px', lineHeight: 1.6, margin: 0, textAlign: 'center', opacity: 0.9 }}>
                {disclaimer}
              </p>
            )}
            {guaranteeText && (
              <p style={{ color: 'var(--color-deep-blue)', fontWeight: 600, fontSize: '14px', lineHeight: 1.5, margin: 0, textAlign: 'center' }}>
                ✓ {guaranteeText}
              </p>
            )}
          </div>
        )}
        
        {ctaTitle && (
          <div style={{ 
            marginTop: '40px', 
            background: 'var(--color-white)', 
            border: '1px solid var(--color-border)',
            borderTop: '4px solid var(--color-primary)', 
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)', 
            padding: '36px 32px', 
            borderRadius: '0', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '24px', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '10px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontWeight: 700 }}>{ctaTitle}</h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{ctaSubtitle}</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a href={ctaButtonLink || '#form'} className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-block' }}>{ctaButtonText}</a>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-tier-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
        }
        .btn-regular {
          background: #10273B !important;
          color: #FFFFFF !important;
          border: 1px solid #10273B !important;
          transition: all 0.3s ease !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 15px !important;
          white-space: normal !important;
          text-wrap: balance !important;
          text-align: center !important;
          line-height: 1.3 !important;
          min-height: 52px !important;
        }
        .btn-regular:hover {
          background: #174269 !important;
          color: #FFFFFF !important;
          border-color: #174269 !important;
        }
        .btn-popular {
          background: #FFFFFF !important;
          color: #10273B !important;
          border: 1px solid #FFFFFF !important;
          transition: all 0.3s ease !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 15px !important;
          white-space: normal !important;
          text-wrap: balance !important;
          text-align: center !important;
          line-height: 1.3 !important;
          min-height: 52px !important;
        }
        .btn-popular:hover {
          background: #174269 !important;
          color: #FFFFFF !important;
          border-color: #FFFFFF !important;
        }
      `}} />
    </section>
  );
}

