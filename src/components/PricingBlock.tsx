'use client';

export default function PricingBlock() {
  const tiers = [
    {
      title: 'Гражданам',
      subtitle: 'Защита личных интересов',
      popular: false,
      price: 'от ХХ ХХХ ₽',
      features: [
        'Сложные семейные споры (раздел)',
        'Банкротство физических лиц',
        'Наследственные дела',
        'Споры с застройщиками'
      ]
    },
    {
      title: 'Бизнесу',
      subtitle: 'Комплексное сопровождение',
      popular: true,
      price: 'от ХХ ХХХ ₽',
      features: [
        'Арбитражные споры',
        'Банкротство юр. лиц',
        'Налоговая практика',
        'Корпоративные конфликты'
      ]
    },
    {
      title: 'Уголовная практика',
      subtitle: 'Защита по экономическим статьям',
      popular: false,
      price: 'от ХХ ХХХ ₽',
      features: [
        'Участие на стадии проверки',
        'Защита на следствии и в суде',
        'Сопровождение обысков',
        'Защита руководителей (УК РФ)'
      ]
    }
  ];

  return (
    <section id="pricing" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0', background: 'var(--color-cream)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            marginBottom: '16px'
          }}>
            Стоимость услуг
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            Каждое дело требует индивидуального подхода. Итоговая стоимость фиксируется в договоре после бесплатного анализа вашей ситуации.
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: '30px', alignItems: 'stretch' }}>
          {tiers.map((tier, idx) => (
            <div key={idx} style={{
              background: tier.popular ? 'var(--color-deep-blue)' : 'var(--color-white)',
              color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)',
              borderRadius: '0',
              padding: '40px 30px',
              boxShadow: tier.popular ? '0 20px 40px rgba(16, 39, 59, 0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
              border: tier.popular ? 'none' : '1px solid rgba(23, 50, 77, 0.1)',
              position: 'relative',
              transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            className="pricing-tier-card"
            >
              {tier.popular && (
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'var(--color-primary)',
                  color: 'var(--color-deep-blue)',
                  padding: '6px 16px',
                  borderRadius: '0',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Востребовано
                </div>
              )}
              
              <h3 style={{ fontSize: '24px', margin: '0 0 8px 0', color: 'inherit' }}>{tier.title}</h3>
              <p style={{ fontSize: '15px', opacity: 0.8, margin: '0 0 30px 0', minHeight: '40px' }}>{tier.subtitle}</p>
              
              <div style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', fontWeight: 'bold', margin: '0 0 30px 0', borderBottom: `1px solid ${tier.popular ? 'rgba(255,255,255,0.2)' : 'rgba(23,50,77,0.1)'}`, paddingBottom: '30px' }}>
                {tier.price}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', opacity: 0.9 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#consultation" className="btn" style={{ 
                width: '100%', 
                textAlign: 'center', 
                background: tier.popular ? 'var(--color-primary)' : 'transparent',
                color: tier.popular ? 'var(--color-deep-blue)' : 'var(--color-primary)',
                border: tier.popular ? 'none' : '1px solid var(--color-primary)',
                borderRadius: '0'
              }}>
                Узнать точную стоимость
              </a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pricing-tier-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </section>
  );
}
