
'use client';

export default function ReviewsBlock() {
  return (
    <section id="reviews" className="section" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(48px, 6vw, 80px) 0', background: 'var(--color-white)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
          <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
            Репутация
          </span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0, lineHeight: 1.2, maxWidth: '600px' }}>
            Отзывы<br className="desktop-only" /> и независимые оценки
          </h2>
          <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '15px', margin: 0, maxWidth: '400px', fontStyle: 'italic', borderLeft: '3px solid var(--color-primary)', paddingLeft: '16px' }}>
            Строго соблюдаем конфиденциальность, поэтому публикуем отзывы только с согласия доверителей.
          </p>
        </div>

        {/* Rating Badges Row */}
        <div className="reviews-ratings-row">
          {/* Yandex Maps Mock */}
          <div className="review-badge-card" style={{ borderLeft: '4px solid #FC3F1D' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src="/images/yandex_logo.png" alt="Yandex" width="44" height="44" style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <div style={{ color: 'var(--color-deep-blue)', fontSize: '17px', fontWeight: 600, marginBottom: '4px' }}>Яндекс Карты</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px', fontStyle: 'italic' }}>рейтинг будет добавлен...</div>
              </div>
            </div>
            <a href="#" className="btn-outline" style={{ padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap' }}>Читать отзывы</a>
          </div>

          {/* 2GIS Mock */}
          <div className="review-badge-card" style={{ borderLeft: '4px solid #A3C83D' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', overflow: 'hidden', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/images/2gis_logo.png" alt="2GIS" width="100" height="100" style={{ objectFit: 'contain', flexShrink: 0 }} />
              </div>
              <div>
                <div style={{ color: 'var(--color-deep-blue)', fontSize: '17px', fontWeight: 600, marginBottom: '4px' }}>Отзывы 2ГИС</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px', fontStyle: 'italic' }}>рейтинг будет добавлен...</div>
              </div>
            </div>
            <a href="#" className="btn-outline" style={{ padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap' }}>Читать отзывы</a>
          </div>
        </div>

        {/* Clean Wireframe Review Cards */}
        <div className="reviews-grid">
          {[1, 2, 3].map((idx) => (
            <div key={idx} style={{
              background: 'rgba(23, 50, 77, 0.02)',
              border: '1px dashed rgba(23, 50, 77, 0.15)',
              borderRadius: '0',
              padding: '40px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '220px'
            }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '50%', 
                background: 'rgba(193, 160, 102, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '16px',
                color: 'var(--color-primary)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h4 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                Место для подтвержденного отзыва
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, maxWidth: '240px' }}>
                Здесь появится реальный отзыв нашего доверителя после завершения дела.
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .reviews-ratings-row {
          display: flex;
          gap: 24px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .review-badge-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: var(--gradient-cream);
          padding: 20px 24px;
          border-radius: 0;
          flex: 1;
          min-width: 260px;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 991px) and (min-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 767px) {
          .reviews-ratings-row {
            gap: 16px !important;
            margin-bottom: 28px !important;
          }
          .review-badge-card {
            min-width: 0 !important;
            width: 100% !important;
            padding: 18px 16px !important;
            gap: 14px !important;
          }
          .review-badge-card .btn-outline {
            width: 100% !important;
            text-align: center !important;
          }
          .reviews-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

