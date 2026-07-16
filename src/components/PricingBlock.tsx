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
    <section className="section" style={{ padding: '100px 0', background: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            marginBottom: '16px'
          }}>
            Фиксированная стоимость услуг и комфортные условия оплаты
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            Стоимость закрепляется в договоре и не меняется. Доступна беспроцентная рассрочка. При выигрыше дела расходы взыскиваются с оппонента.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {prices.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--color-cream)',
              padding: '24px 32px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              transition: 'var(--transition)',
              flexWrap: 'wrap',
              gap: '16px'
            }}
            className="pricing-row"
            >
              <div style={{ flex: '1 1 500px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '8px', lineHeight: '1.4' }}>
                  {item.title}
                </h3>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>
                  {item.desc}
                </div>
              </div>
              <div style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: 'var(--color-primary)',
                whiteSpace: 'nowrap'
              }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>
            *Указана базовая стоимость. Точная смета формируется после бесплатного анализа вашей ситуации.
          </p>
        </div>
      </div>

      <style jsx>{`
        .pricing-row:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
          border-color: var(--color-primary);
        }
      `}</style>
    </section>
  );
}
