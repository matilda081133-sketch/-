'use client';
import React from 'react';

export interface PricingFeature {
  name: string | React.ReactNode;
  value?: string;
}

export interface PricingTier {
  title?: string | React.ReactNode;
  name?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  popular?: boolean;
  isPopular?: boolean;
  badgeText?: string;
  badge?: string;
  price?: string;
  period?: string;
  features: (PricingFeature | string)[];
  buttonText?: string;
  ctaText?: string;
  buttonHref?: string;
  ctaHref?: string;
}

interface PricingBlockProps {
  title?: string;
  subtitle?: string | React.ReactNode;
  tiers?: PricingTier[];
  ctaTitle?: string | React.ReactNode;
  ctaSubtitle?: string | React.ReactNode;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  disclaimer?: string | React.ReactNode;
  guaranteeText?: string;
  sectionStyle?: React.CSSProperties;
  showDemoWarning?: boolean;
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
  sectionStyle,
  showDemoWarning
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

  const rawTiers = propTiers || defaultTiers;
  const tiers = rawTiers.map((tier) => ({
    ...tier,
    title: tier.title || tier.name || '',
    subtitle: tier.subtitle || tier.description || '',
    popular: tier.popular ?? tier.isPopular ?? false,
    badgeText: tier.badgeText || tier.badge || '',
    price: tier.price,
    features: (tier.features || []).map((f) =>
      typeof f === 'string'
        ? { name: f, value: '' }
        : { name: f.name || '', value: f.value || '' }
    ),
    buttonText: tier.buttonText || tier.ctaText || 'Выбрать тариф',
    buttonHref: tier.buttonHref || tier.ctaHref || '#form',
  }));

  return (
    <section id="pricing" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--gradient-cream)', ...sectionStyle }}>
      {/* Schema.org Offer Catalog for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'name': typeof title === 'string' ? title : 'Стоимость юридических услуг в Липецке',
            'itemListElement': tiers.map((tier, tIdx) => {
              const numPrice = tier.price ? String(tier.price).replace(/[^\d]/g, '') : '';
              return {
                '@type': 'Offer',
                'position': tIdx + 1,
                'name': typeof tier.title === 'string' ? tier.title : 'Юридическая услуга',
                'description': typeof tier.subtitle === 'string' ? tier.subtitle : undefined,
                'price': numPrice || '0',
                'priceCurrency': 'RUB',
                'availability': 'https://schema.org/InStock',
                'url': 'https://dejure-help.ru/#pricing'
              };
            })
          })
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, ...(tiers.length >= 5 ? { maxWidth: '1400px' } : {}) }}>
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

        {showDemoWarning && (
          <div
            style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #fef3c7',
              borderRadius: '8px',
              padding: '14px 20px',
              marginBottom: '32px',
              fontSize: '13px',
              color: '#92400e',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '850px',
              margin: '0 auto 32px auto',
              lineHeight: 1.5
            }}
          >
            <span style={{ fontSize: '18px', flexShrink: 0 }}>ℹ</span>
            <span>
              Указанные тарифы и объёмы услуг носят ориентировочный характер. Точный состав работ, лимиты и регламент взаимодействия фиксируются в договоре после предварительного анализа задач бизнеса.
            </span>
          </div>
        )}

        <div 
          className={`pricing-grid-container ${tiers.length >= 5 ? "pricing-grid-5" : tiers.length === 4 ? "pricing-grid-4" : tiers.length >= 3 ? "pricing-grid-3" : "pricing-grid-2"}`}
        >
          {tiers.map((tier, idx) => {
            const numericPrice = tier.price ? String(tier.price).replace(/[^\d]/g, '') : '';
            const tierTitleStr = typeof tier.title === 'string' ? tier.title : 'Юридическая услуга';
            const tierSubtitleStr = typeof tier.subtitle === 'string' ? tier.subtitle : '';
            return (
            <div key={idx} style={{
              background: tier.popular ? 'linear-gradient(145deg, #0B1C2A 0%, #17375E 100%)' : 'var(--color-white)',
              color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)',
              borderRadius: '0',
              padding: tiers.length >= 5 ? '26px 12px' : tiers.length === 4 ? '32px 16px' : '40px 30px',
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
            itemScope
            itemType="https://schema.org/Offer"
            >
              {numericPrice && (
                <>
                  <meta itemProp="price" content={numericPrice} />
                  <meta itemProp="priceCurrency" content="RUB" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <meta itemProp="name" content={tierTitleStr} />
                  {tierSubtitleStr && <meta itemProp="description" content={tierSubtitleStr} />}
                </>
              )}
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
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap'
                }}>
                  {tier.badgeText}
                </div>
              )}
              
              <div style={{ minHeight: tiers.length >= 5 ? '165px' : '185px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginBottom: tiers.length >= 5 ? '18px' : '24px' }}>
                <h3 style={{ fontSize: tiers.length >= 5 ? '16.5px' : tiers.length === 4 ? '20px' : '22px', margin: '0 0 8px 0', color: 'inherit', textAlign: 'center', lineHeight: 1.3 }}>{tier.title}</h3>
                <p style={{ fontSize: tiers.length >= 5 ? '12.5px' : '14px', opacity: 0.8, margin: '0 0 12px 0', textAlign: 'center', lineHeight: 1.45 }}>{tier.subtitle}</p>
                
                {tier.price && (
                  <div style={{ fontSize: tiers.length >= 5 ? '22px' : '28px', fontFamily: 'var(--font-serif)', fontWeight: 'bold', marginTop: 'auto', textAlign: 'center' }}>
                    {tier.price}
                  </div>
                )}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: tiers.length >= 5 ? '0 0 24px 0' : '0 0 32px 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: tiers.length >= 5 ? '12px' : '16px' }}>
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '6px', fontSize: tiers.length >= 5 ? '12px' : '13px', opacity: 0.9 }}>
                    <div style={{ display: 'flex', gap: '6px', flex: '1 1 0%', minWidth: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={tier.popular ? "rgba(255,255,255,0.5)" : "var(--color-primary)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span style={{ lineHeight: 1.3, wordBreak: 'break-word' }}>{feature.name}</span>
                    </div>
                    <span style={{ fontWeight: 600, whiteSpace: 'nowrap', color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)', marginLeft: '4px' }}>{feature.value}</span>
                  </li>
                ))}
              </ul>

              <a href={tier.buttonHref || "#form"} className={`btn ${tier.popular ? 'btn-popular' : 'btn-regular'}`} style={{ 
                width: '100%', 
                textAlign: 'center',
                borderRadius: '0',
                fontSize: tiers.length >= 5 ? '13px' : '15px',
                padding: tiers.length >= 5 ? '12px 6px' : '14px 16px',
                whiteSpace: 'normal',
                textWrap: 'balance',
                lineHeight: 1.3,
                minHeight: tiers.length >= 5 ? '48px' : '52px'
              }}>
                {tier.buttonText || 'Узнать точную стоимость'}
              </a>
            </div>
          );
          })}
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
          <div className="pricing-cta-banner" style={{ 
            marginTop: '40px', 
            background: 'var(--color-white)', 
            border: '1px solid var(--color-border)',
            borderTop: '3px solid var(--color-primary)', 
            boxShadow: '0 10px 30px rgba(16, 39, 59, 0.12), 0 2px 8px rgba(16, 39, 59, 0.08)', 
            padding: '38px 40px', 
            borderRadius: '0', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '24px', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            maxWidth: '1152px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontWeight: 600 }}>{ctaTitle}</h3>
              <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>{ctaSubtitle}</p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a href={ctaButtonLink || '#form'} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '15px', borderRadius: '0', whiteSpace: 'nowrap', display: 'inline-block' }}>{ctaButtonText}</a>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-grid-container {
          display: grid;
          align-items: stretch;
          width: 100%;
        }
        .pricing-grid-5 {
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }
        .pricing-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .pricing-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
        }
        .pricing-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px;
          max-width: 850px;
          margin: 0 auto;
        }
        .pricing-cta-banner {
          max-width: 1152px !important;
          margin-left: auto !important;
          margin-right: auto !important;
          width: 100% !important;
        }
        @media (max-width: 991px) and (min-width: 768px) {
          .pricing-grid-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 1024px) and (min-width: 768px) {
          .pricing-grid-3, .pricing-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 767px) {
          .pricing-grid-container, .pricing-grid-5, .pricing-grid-4, .pricing-grid-3, .pricing-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .pricing-tier-card {
            padding: 28px 20px !important;
          }
          .pricing-cta-banner {
            padding: 24px 20px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: left !important;
          }
          .pricing-cta-banner .btn {
            width: 100% !important;
            text-align: center !important;
          }
        }
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

