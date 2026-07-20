'use client';

export default function PricingBlock() {
  const tiers = [
    {
      title: 'Гражданам',
      subtitle: 'Защита личных интересов',
      popular: false,
      price: 'от 2 000 ₽',
      features: [
        { name: 'Устная консультация', value: '2 000 ₽' },
        { name: 'Составление иска', value: 'от 10 000 ₽' },
        { name: 'Ведение дела в суде', value: 'от 15 000 ₽' },
        { name: 'Апелляционная жалоба', value: 'от 20 000 ₽' },
        { name: 'Ознакомление с делом', value: '4 000 ₽/том' }
      ]
    },
    {
      title: 'Бизнесу',
      subtitle: 'Комплексное сопровождение',
      popular: true,
      price: 'от 5 000 ₽',
      features: [
        { name: 'Консультация (юр. лица)', value: '5 000 ₽' },
        { name: 'Разработка договоров', value: 'от 10 000 ₽' },
        { name: 'Претензионная работа', value: 'от 15 000 ₽' },
        { name: 'Судебное представительство', value: 'от 15 000 ₽' },
        { name: 'Анализ документов', value: 'от 10 000 ₽' }
      ]
    },
    {
      title: 'Документы и консалтинг',
      subtitle: 'Правовая аналитика',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Письменная консультация', value: 'от 30 000 ₽' },
        { name: 'Правовое заключение', value: 'от 35 000 ₽' },
        { name: 'Участие в переговорах', value: '15 000 ₽' },
        { name: 'Представление в гос. органах', value: '15 000 ₽' },
        { name: 'Внутренняя документация', value: 'от 15 000 ₽' }
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
            Каждое дело требует индивидуального подхода. Ниже представлены базовые тарифы, итоговая стоимость фиксируется в договоре.
          </p>
          <div style={{ display: 'inline-block', marginTop: '20px', padding: '6px 16px', background: 'rgba(23, 50, 77, 0.05)', borderRadius: '4px', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', fontSize: '13px' }}>
            Тестовые значения для согласования
          </div>
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
                  background: 'var(--color-white)',
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
                  <li key={fIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', fontSize: '14px', opacity: 0.9 }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={tier.popular ? "rgba(255,255,255,0.5)" : "var(--color-primary)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span style={{ lineHeight: 1.3 }}>{feature.name}</span>
                    </div>
                    <span style={{ fontWeight: 600, whiteSpace: 'nowrap', color: tier.popular ? 'var(--color-white)' : 'var(--color-deep-blue)' }}>{feature.value}</span>
                  </li>
                ))}
              </ul>

              <a href="#consultation" className={`btn ${tier.popular ? 'btn-popular' : 'btn-regular'}`} style={{ 
                width: '100%', 
                textAlign: 'center',
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
        .btn-regular {
          background: transparent;
          color: var(--color-primary);
          border: 1px solid var(--color-primary);
        }
        .btn-regular:hover {
          background: var(--color-primary) !important;
          color: var(--color-white) !important;
        }
        .btn-popular {
          background: var(--color-white);
          color: var(--color-deep-blue);
          border: 1px solid var(--color-white);
        }
        .btn-popular:hover {
          background: var(--color-primary) !important;
          color: var(--color-white) !important;
          border-color: var(--color-primary) !important;
        }
      `}</style>
    </section>
  );
}
