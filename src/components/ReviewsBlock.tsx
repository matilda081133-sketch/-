
'use client';

export default function ReviewsBlock() {
  return (
    <section id="reviews" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--color-white)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
          <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
            Репутация
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontSize: '42px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, lineHeight: 1.2, maxWidth: '600px' }}>
            Отзывы и независимые оценки
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', margin: 0, maxWidth: '400px', fontWeight: 500, fontStyle: 'italic', borderLeft: '3px solid var(--color-primary)', paddingLeft: '16px' }}>
            Строго соблюдаем конфиденциальность, поэтому публикуем отзывы только с согласия доверителей.
          </p>
        </div>

        {/* Rating Badges Row */}
        <div style={{ display: 'flex', gap: '30px', marginBottom: '50px', flexWrap: 'wrap' }}>
          {/* Yandex Maps Mock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--color-cream)', padding: '24px 30px', borderRadius: '0', flex: '1', minWidth: '320px', borderLeft: '4px solid #FC3F1D', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="https://avatars.mds.yandex.net/get-bunker/60661/2a00000160d5b7661e754cbcf1a42f567b55/256x256" alt="Yandex" width="48" height="48" style={{ borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <div style={{ color: 'var(--color-deep-blue)', fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Яндекс Карты</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px', fontStyle: 'italic' }}>рейтинг будет добавлен...</div>
              </div>
            </div>
            <a href="#" className="btn-outline" style={{ padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap' }}>Читать отзывы</a>
          </div>

          {/* 2GIS Mock */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: 'var(--color-cream)', padding: '24px 30px', borderRadius: '0', flex: '1', minWidth: '320px', borderLeft: '4px solid #A3C83D', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/2GIS_logo.png" alt="2GIS" width="48" height="48" style={{ borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <div style={{ color: 'var(--color-deep-blue)', fontSize: '18px', fontWeight: 600, marginBottom: '6px' }}>Отзывы 2ГИС</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px', fontStyle: 'italic' }}>рейтинг будет добавлен...</div>
              </div>
            </div>
            <a href="#" className="btn-outline" style={{ padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap' }}>Читать отзывы</a>
          </div>
        </div>

        {/* Clean Wireframe Review Cards */}
        <div className="grid grid-3" style={{ gap: '30px' }}>
          {[1, 2, 3].map((idx) => (
            <div key={idx} style={{
              background: 'rgba(23, 50, 77, 0.02)',
              border: '1px dashed rgba(23, 50, 77, 0.15)',
              borderRadius: '0',
              padding: '60px 30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '260px'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                background: 'rgba(193, 160, 102, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '20px',
                color: 'var(--color-primary)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', fontFamily: 'var(--font-serif)' }}>
                Место для подтвержденного отзыва
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, maxWidth: '220px' }}>
                Здесь появится реальный отзыв нашего доверителя после завершения дела.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
