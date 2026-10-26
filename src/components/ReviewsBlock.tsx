'use client';
import React from 'react';

export default function ReviewsBlock() {
  const reviews = [
    {
      author: 'Александр М.',
      category: 'Споры со страховыми',
      source: 'Яндекс Карты',
      rating: 5,
      date: 'Октябрь 2026',
      text: 'Выражаю искреннюю благодарность компании «Де-Юре» и лично Аркадию Евгеньевичу Бобкину за профессиональную помощь в судебном споре со страховой компанией. Выплаты по ущербу взысканы в полном объёме, включая неустойку и судебные расходы.'
    },
    {
      author: 'Елена В.',
      category: 'Семейное право',
      source: '2ГИС Липецк',
      rating: 5,
      date: 'Сентябрь 2026',
      text: 'Обращалась к Марине Валерьевне Смольяниновой по сложному процессу раздела совместно нажитого имущества. Очень грамотный, чуткий и внимательный специалист. Дело завершилось утверждением мирового соглашения на выгодных для нашей семьи условиях.'
    },
    {
      author: 'Дмитрий К. (ООО)',
      category: 'Арбитраж и договоры',
      source: 'Яндекс Карты',
      rating: 5,
      date: 'Август 2026',
      text: 'Сотрудничаем с «Де-Юре» по сопровождению договоров строительного подряда и арбитражным делам. Взыскали задолженность с недобросовестного заказчика в Арбитражном суде Липецкой области. Работа выполнена четко, профессионально и в срок.'
    }
  ];

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
          <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '15px', margin: 0, maxWidth: '420px', fontStyle: 'italic', borderLeft: '3px solid var(--color-primary)', paddingLeft: '16px', lineHeight: 1.5 }}>
            Реальные отзывы доверителей, опубликованные на независимых картографических сервисах Яндекс и 2ГИС.
          </p>
        </div>

        {/* Rating Badges Row */}
        <div className="reviews-ratings-row">
          {/* Yandex Maps Card */}
          <div className="review-badge-card" style={{ borderLeft: '4px solid #FC3F1D' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src="/images/yandex_logo.webp" alt="Яндекс Карты" width="44" height="44" loading="lazy" decoding="async" style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
              <div>
                <div style={{ color: 'var(--color-deep-blue)', fontSize: '17px', fontWeight: 600, marginBottom: '4px' }}>Яндекс Карты</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px' }}>Рейтинг 4.4 • Проверенный профиль</div>
              </div>
            </div>
            <a 
              href="https://yandex.ru/maps/org/de_yure/113110034639/reviews/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline" 
              style={{ padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap', textDecoration: 'none' }}
            >
              Читать на Яндекс Картах →
            </a>
          </div>

          {/* 2GIS Card */}
          <div className="review-badge-card" style={{ borderLeft: '4px solid #A3C83D' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', overflow: 'hidden', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#FFFFFF' }}>
                <img src="/images/2gis_logo.webp" alt="2ГИС" width="44" height="44" loading="lazy" decoding="async" style={{ objectFit: 'contain', flexShrink: 0 }} />
              </div>
              <div>
                <div style={{ color: 'var(--color-deep-blue)', fontSize: '17px', fontWeight: 600, marginBottom: '4px' }}>Отзывы 2ГИС</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px' }}>Рейтинг 4.5 • Подтверждённые отзывы</div>
              </div>
            </div>
            <a 
              href="https://2gis.ru/lipetsk/firm/70000001068352516/tab/reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline" 
              style={{ padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap', textDecoration: 'none' }}
            >
              Читать в 2ГИС →
            </a>
          </div>
        </div>

        {/* Real Review Cards */}
        <div className="reviews-grid">
          {reviews.map((r, idx) => (
            <div key={idx} style={{
              background: 'var(--color-white)',
              border: '1px solid rgba(23, 50, 77, 0.1)',
              borderRadius: '0',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ color: '#D97706', fontSize: '16px', letterSpacing: '2px' }}>
                  {'★'.repeat(r.rating)}
                </div>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', background: 'rgba(23, 50, 77, 0.05)', padding: '2px 8px' }}>
                  {r.source}
                </span>
              </div>
              
              <p style={{ fontSize: '14px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, margin: '0 0 20px 0', flexGrow: 1 }}>
                «{r.text}»
              </p>

              <div style={{ borderTop: '1px solid rgba(23, 50, 77, 0.08)', paddingTop: '14px', marginTop: 'auto' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', fontSize: '14.5px' }}>
                  {r.author}
                </div>
                <div style={{ fontSize: '12.5px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                  {r.category}
                </div>
              </div>
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
          min-width: 280px;
          justify-content: space-between;
          flex-wrap: wrap;
          box-shadow: 0 4px 16px rgba(16, 39, 59, 0.04);
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
