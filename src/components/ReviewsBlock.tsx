'use client';

export default function ReviewsBlock() {
  const reviews = [
    {
      text: "Юристы Де-Юре помогли отбить субсидиарную ответственность на сумму более 40 млн рублей. Процесс длился почти год, но результат превзошел ожидания. Работают четко, без лишних обещаний, опираясь только на факты.",
      author: "Александр М.",
      role: "Владелец строительной компании"
    },
    {
      text: "Обратились по рекомендации после того, как налоговая доначислила огромную сумму по выездной проверке. Адвокаты подключились на этапе возражений и смогли снизить сумму претензий в суде на 80%.",
      author: "Екатерина В.",
      role: "Финансовый директор"
    },
    {
      text: "Единственная компания в городе, которая честно сказала о рисках до подписания договора. В итоге мы отказались от бесперспективного иска и сэкономили кучу денег на пошлинах и экспертизах. Очень ценю такой подход.",
      author: "Михаил С.",
      role: "Индивидуальный предприниматель"
    }
  ];

  return (
    <section id="reviews" className="section bg-white" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      {/* Background abstract element */}
      <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(23,50,77,0.02) 0%, transparent 100%)', zIndex: 0, pointerEvents: 'none' }}></div>
      
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
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', margin: 0, maxWidth: '400px' }}>
            Мы сохраняем строгую адвокатскую тайну, поэтому публикуем отзывы только с согласия доверителей.
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: '30px' }}>
          {reviews.map((review, idx) => (
            <div key={idx} style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '40px 30px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              transition: 'var(--transition)',
              boxShadow: '0 10px 30px rgba(23, 50, 77, 0.02)'
            }}
            className="review-text-card"
            >
              {/* Quote Mark */}
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '20px', 
                fontSize: '120px', 
                fontFamily: 'var(--font-serif)', 
                color: 'rgba(212, 175, 55, 0.1)', 
                lineHeight: 1, 
                zIndex: 0,
                userSelect: 'none'
              }}>
                “
              </div>
              
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
                <p style={{ 
                  fontSize: '16px', 
                  lineHeight: 1.7, 
                  color: 'var(--color-text-main)', 
                  fontStyle: 'italic',
                  marginBottom: '30px'
                }}>
                  "{review.text}"
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(23, 50, 77, 0.05)', paddingTop: '20px' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-deep-blue)', fontSize: '16px', marginBottom: '4px' }}>
                  {review.author}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .review-text-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(23, 50, 77, 0.08) !important;
          border-color: rgba(212, 175, 55, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
