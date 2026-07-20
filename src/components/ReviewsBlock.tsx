'use client';

export default function ReviewsBlock() {
  return (
    <section id="reviews" className="section bg-grey-blue" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
          <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
            Репутация
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, lineHeight: 1.2, maxWidth: '600px' }}>
            Доверие, подкрепленное результатами
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', margin: 0, maxWidth: '400px', fontWeight: 500, fontStyle: 'italic', borderLeft: '3px solid var(--color-primary)', paddingLeft: '16px' }}>
            Мы сохраняем строгую адвокатскую тайну, поэтому публикуем отзывы только с согласия доверителей.
          </p>
        </div>

        {/* Rating Badges Row */}
        <div style={{ display: 'flex', gap: '30px', marginBottom: '60px', flexWrap: 'wrap' }}>
          {/* Yandex Maps Mock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--color-white)', padding: '20px 30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', flex: '1', minWidth: '280px' }}>
            <div style={{ width: '48px', height: '48px', background: '#FC3F1D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '24px', flexShrink: 0 }}>Я</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4, fontWeight: 500 }}>Рейтинг будет добавлен после запуска профиля</span>
              </div>
              <div style={{ color: 'var(--color-deep-blue)', fontSize: '15px', fontWeight: 600 }}>Яндекс Карты</div>
            </div>
          </div>

          {/* 2GIS Mock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--color-white)', padding: '20px 30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', flex: '1', minWidth: '280px' }}>
            <div style={{ width: '48px', height: '48px', background: '#A3C83D', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px', flexShrink: 0 }}>2ГИС</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4, fontWeight: 500 }}>Рейтинг будет добавлен после запуска профиля</span>
              </div>
              <div style={{ color: 'var(--color-deep-blue)', fontSize: '15px', fontWeight: 600 }}>Отзывы 2ГИС</div>
            </div>
          </div>
        </div>

        {/* Wireframe Review Cards */}
        <div className="grid grid-3" style={{ gap: '30px' }}>
          {[1, 2, 3].map((idx) => (
            <div key={idx} style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '40px 30px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 12px rgba(23, 50, 77, 0.03)',
              minHeight: '280px'
            }}>
              {/* Quote Mark */}
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '20px', 
                fontSize: '100px', 
                fontFamily: 'var(--font-serif)', 
                color: 'var(--color-grey-blue)', 
                lineHeight: 1, 
                zIndex: 0,
                userSelect: 'none'
              }}>
                “
              </div>
              
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '20px' }}>
                {/* Wireframe Text Lines */}
                <div style={{ height: '14px', background: 'var(--color-grey-blue)', borderRadius: '4px', width: '100%' }}></div>
                <div style={{ height: '14px', background: 'var(--color-grey-blue)', borderRadius: '4px', width: '90%' }}></div>
                <div style={{ height: '14px', background: 'var(--color-grey-blue)', borderRadius: '4px', width: '95%' }}></div>
                <div style={{ height: '14px', background: 'var(--color-grey-blue)', borderRadius: '4px', width: '60%' }}></div>
              </div>

              <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(23, 50, 77, 0.05)', paddingTop: '20px', marginTop: '20px' }}>
                <div style={{ height: '16px', background: '#D7E0E6', borderRadius: '4px', width: '120px', marginBottom: '8px' }}></div>
                <div style={{ height: '12px', background: 'var(--color-grey-blue)', borderRadius: '4px', width: '80px' }}></div>
              </div>
              
              {/* Overlay Disclaimer */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
                <span style={{ background: 'var(--color-primary)', color: 'white', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>Ожидается публикация</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
