'use client';

export default function PricingBlock() {
  return (
    <section className="section bg-white" style={{ padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '42px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            marginBottom: '16px'
          }}>
            Прозрачная стоимость и комфортная оплата
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            Мы знаем, как важна финансовая предсказуемость. Поэтому мы предлагаем гибкие условия, чтобы качественная юридическая защита была доступна каждому.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px'
        }}>
          {/* Card 1 */}
          <div style={{ 
            background: 'var(--color-cream)', 
            padding: '40px 32px', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--color-border)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '24px' }}>🛡️</div>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
              Фиксируем цену в договоре
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '16px' }}>
              Стоимость наших услуг определяется на первой консультации после анализа дела. Сумма прописывается в договоре и <strong>не меняется</strong> в процессе работы. Никаких скрытых платежей.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ 
            background: 'var(--color-deep-blue)', 
            padding: '40px 32px', 
            borderRadius: 'var(--radius-lg)', 
            color: 'var(--color-white)',
            position: 'relative',
            boxShadow: 'var(--shadow-lg)',
            transform: 'scale(1.05)',
            zIndex: 1
          }}>
            <div style={{ fontSize: '40px', marginBottom: '24px' }}>💳</div>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--color-white)', marginBottom: '16px' }}>
              Удобная рассрочка
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6', fontSize: '16px', marginBottom: '24px' }}>
              Мы понимаем, что юридические проблемы часто возникают внезапно. Вы можете оплачивать наши услуги <strong>поэтапно</strong>, равными платежами, без банков и скрытых процентов.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Первоначальный взнос от 0 ₽
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ 
            background: 'var(--color-cream)', 
            padding: '40px 32px', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--color-border)',
            position: 'relative'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '24px' }}>⚖️</div>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
              Взыскание расходов
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '16px' }}>
              В большинстве судебных споров, согласно закону, все затраты на адвоката <strong>оплачивает проигравшая сторона</strong>. Мы всегда заявляем эти требования в суд, чтобы вернуть ваши деньги.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
