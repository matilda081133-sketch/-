'use client';

export default function PricingBlock() {
  const prices = [
    {
      title: 'Представление интересов в Арбитражном суде',
      desc: '(взыскание задолженности, оспаривание сделок, договоры)',
      price: 'от ХХ ХХХ ₽'
    },
    {
      title: 'Сопровождение процедуры банкротства юр. лиц',
      desc: '(защита от субсидиарной ответственности, включение в реестр)',
      price: 'от ХХ ХХХ ₽'
    },
    {
      title: 'Уголовно-правовая защита (УК РФ)',
      desc: '(участие адвоката на стадии доследственной проверки, следствия и суда)',
      price: 'от ХХ ХХХ ₽'
    },
    {
      title: 'Разрешение налоговых споров',
      desc: '(оспаривание доначислений ФНС, защита при проверках)',
      price: 'от ХХ ХХХ ₽'
    },
    {
      title: 'Сложные семейные споры',
      desc: '(раздел бизнеса и имущества, споры о детях)',
      price: 'от ХХ ХХХ ₽'
    }
  ];

  return (
    <section className="section" style={{ padding: '100px 0', background: 'var(--color-primary)', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }}>
      {/* Декоративный строгий паттерн (линии) */}
      <div style={{ position: 'absolute', top: 0, width: '400px', height: '100%', borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)', right: '10%', zIndex: 0, pointerEvents: 'none' as const }}></div>
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'rgba(255,255,255,0.05)', zIndex: 0, pointerEvents: 'none' as const }}></div>

      <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-white)',
            marginBottom: '16px'
          }}>
            Стоимость услуг
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            Объем работ и порядок оплаты закрепляются в договоре.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {prices.map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px 32px',
              transition: 'all 0.4s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              flexWrap: 'wrap',
              gap: '20px'
            }}
            className="pricing-card"
            >
              <div className="pricing-accent" style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '0%', background: 'var(--color-cream)', transition: 'height 0.4s ease' }}></div>
              <div style={{ flex: '1 1 500px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-white)', marginBottom: '8px', lineHeight: '1.4' }}>
                  {item.title}
                </h3>
                <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '15px' }}>
                  {item.desc}
                </div>
              </div>
              <div style={{ 
                fontSize: '26px', 
                fontWeight: 'bold', 
                color: 'var(--color-cream)',
                fontFamily: 'var(--font-serif)',
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px',
                whiteSpace: 'nowrap'
              }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '15px', margin: 0 }}>
            *Значения будут внесены после утверждения прайса.
          </p>
          <a href="#consultation" className="btn btn-white">Узнать стоимость</a>
        </div>
      </div>

      <style jsx>{`
        .pricing-card:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        .pricing-card:hover .pricing-accent {
          height: 100% !important;
        }
      `}</style>
    </section>
  );
}
