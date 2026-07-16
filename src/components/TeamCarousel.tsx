'use client';
import { useRef } from 'react';
import Link from 'next/link';

export default function TeamCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -330 : 330;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const team = [
    {
      name: 'Бобкин Аркадий Евгеньевич',
      role: 'Директор компании',
      desc: 'Стаж работы (более 20 лет) в следственных подразделениях Федеральной службы налоговой полиции и Министерства внутренних дел РФ. Оказывает профессиональную юридическую помощь в области уголовного законодательства, в сфере экономики и налогооблажения'
    },
    {
      name: 'Начешников Владимир Викторович',
      role: 'Ведущий юрист',
      desc: 'Юрист, более 20 лет оказывает профессиональную юридическую помощь гражданам и организациям в сферах налогового законодательства, корпоративного права, знает все о банкротстве юридических и физических лиц'
    },
    {
      name: 'Смольянинова Марина Валерьевна',
      role: 'Ведущий юрист',
      desc: 'Опыт работы в УФССП России более 10 лет, в том числе более 6 лет из них на руководящих должностях. Оказывает профессиональную юридическую помощь гражданам и организациям в спорах с судебными приставами, а также в области семейного и трудового права'
    },
    {
      name: 'Полозова Елена Анатольевна',
      role: 'Юрист',
      desc: 'Юрист, опыт работы более 8 лет. Оказывает профессиональную юридическую помощь гражданам и организациям в сферах военного, трудового права'
    },
    {
      name: 'Иванушкова Надежда Сергеевна',
      role: 'Юрист',
      desc: 'Юрист, более 10 лет работала юрисконсультом в банковской отрасли. В настоящее время оказывает профессиональную юридическую помощь гражданам и организациям в сферах семейного и трудового права'
    },
    {
      name: 'Конопкин Дмитрий Сергеевич',
      role: 'Адвокат, партнер',
      desc: 'Юридический стаж с 2016 года. Имеет большой стаж работы в структуре Следственного комитета Российской Федерации. С 2022 года осуществляет адвокатскую деятельность.'
    },
    {
      name: 'Гусев Олег Юрьевич',
      role: 'Адвокат, партнер',
      desc: 'Юридический стаж с 1994 года. Опыт работы (более 20 лет) в органах прокуратуры, в том числе на руководящих должностях. С 2015 года осуществляет адвокатскую деятельность.'
    }
  ];

  return (
    <section className="section bg-grey-blue">
      <div className="container">
        <div className="flex justify-between items-center" style={{ marginBottom: '50px' }}>
          <h2 style={{ margin: 0, fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)' }}>Наша команда</h2>
          <Link href="/specialists" className="btn btn-outline" style={{ fontSize: '16px' }}>Вся команда</Link>
        </div>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => scroll('left')} 
            className="carousel-arrow" 
            style={{ 
              position: 'absolute', 
              left: '-25px', 
              zIndex: 10, 
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-white)', 
              boxShadow: '0 4px 12px rgba(23, 50, 77, 0.1)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label="Предыдущие"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-primary)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className="carousel-container" ref={scrollRef} style={{ display: 'flex', alignItems: 'stretch' }}>
            {team.map((person, index) => (
              <div key={index} className="card carousel-item" style={{ 
                padding: '24px', 
                display: 'flex', 
                flexDirection: 'column',
                height: 'auto'
              }}>
                <div className="img-placeholder" style={{ height: '280px', marginBottom: '24px', borderRadius: '8px', flexShrink: 0 }}>Фото</div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '20px', color: 'var(--color-primary)' }}>{person.name}</h4>
                <p style={{ color: 'var(--color-accent)', fontWeight: 600, margin: '0 0 16px 0', fontSize: '14px' }}>{person.role}</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0, flexGrow: 1, lineHeight: '1.6' }}>{person.desc}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')} 
            className="carousel-arrow" 
            style={{ 
              position: 'absolute', 
              right: '-25px', 
              zIndex: 10, 
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-white)', 
              boxShadow: '0 4px 12px rgba(23, 50, 77, 0.1)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label="Следующие"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-white)';
              e.currentTarget.style.color = 'var(--color-primary)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
