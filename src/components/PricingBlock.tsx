'use client';

export default function PricingBlock() {
  const prices = [
    {
      title: 'Представление интересов в Арбитражном суде',
      desc: '(взыскание задолженности, оспаривание сделок, договоры)',
      price: 'от 50.000 руб.'
    },
    {
      title: 'Сопровождение процедуры банкротства юр. лиц',
      desc: '(защита от субсидиарной ответственности, включение в реестр)',
      price: 'от 70.000 руб.'
    },
    {
      title: 'Уголовно-правовая защита (White-collar)',
      desc: '(участие адвоката на стадии доследственной проверки, следствия и суда)',
      price: 'от 70.000 руб.'
    },
    {
      title: 'Разрешение налоговых споров',
      desc: '(оспаривание доначислений ФНС, защита при проверках)',
      price: 'от 60.000 руб.'
    },
    {
      title: 'Сложные семейные споры',
      desc: '(раздел бизнеса и имущества, споры о детях)',
      price: 'от 40.000 руб.'
    }
  ];

  return (
    <section className="section" style={{ padding: '100px 0', background: 'var(--color-primary)', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }}>
      {/* Декоративный строгий паттерн (линии) */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '100%', borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)', right: '10%', zIndex: 0 pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'rgba(255,255,255,0.05)', zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-white)',
            marginBottom: '16px'
          }}>
            Фиксированная стоимость услуг и комфортные условия оплаты
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            Стоимость закрепляется в договоре и не меняется. Доступна беспроцентная рассрочка. При выигрыше дела расходы взыскиваются с оппонента.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
          {prices.map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '32px',
              transition: 'all 0.4s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="pricing-card"
            >
              <div className="pricing-accent" style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '0%', background: 'var(--color-cream)', transition: 'height 0.4s ease' }}></div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-white)', marginBottom: '12px', lineHeight: '1.4' }}>
                  {item.title}
                </h3>
                <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '15px', marginBottom: '24px' }}>
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
                gap: '8px'
              }}>
                {item.price}
                <span style={{ fontSize: '14px', fontWeight: 'normal', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'var(--font-sans)' }}>/ базово</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '50px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '15px', margin: 0 }}>
            *Указана базовая стоимость. Точная смета формируется после бесплатного анализа вашей ситуации.
          </p>
          <a href="#consultation" className="btn" style={{ background: 'var(--color-white)', color: 'var(--color-primary)', borderColor: 'var(--color-white)' }}>Узнать точную стоимость</a>
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
