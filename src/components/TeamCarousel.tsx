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
      name: 'Начешников Владимир Викторович',
      role: 'Ведущий юрист',
      desc: 'Специализация: корпоративное право и банкротство. Опыт работы более 20 лет в сферах налогового законодательства и комплексного сопровождения процедур банкротства физических и юридических лиц.',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Смольянинова Марина Валерьевна',
      role: 'Ведущий юрист',
      desc: 'Специализация: исполнительное производство, семейное и трудовое право. Опыт работы в УФССП России более 10 лет, из них более 6 лет на руководящих должностях.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Полозова Елена Анатольевна',
      role: 'Юрист',
      desc: 'Специализация: военное и трудовое право. Юридический стаж более 8 лет. Представляет интересы доверителей в судах и государственных органах.',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Иванушкова Надежда Сергеевна',
      role: 'Юрист',
      desc: 'Специализация: семейное и трудовое право. Юридический стаж более 10 лет, включая работу юрисконсультом в банковской сфере.',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Конопкин Дмитрий Сергеевич',
      role: 'Адвокат, партнер',
      desc: 'Специализация: уголовное право. Юридический стаж с 2016 года. Значительный опыт работы в структуре Следственного комитета РФ. Статус адвоката с 2022 года.',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Гусев Олег Юрьевич',
      role: 'Адвокат, партнер',
      desc: 'Специализация: защита по уголовным делам. Юридический стаж с 1994 года. Более 20 лет работы в органах прокуратуры, в том числе на руководящих должностях. Статус адвоката с 2015 года.',
      img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="section bg-cream">
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
              background: 'var(--gradient-light)', 
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
                <div style={{ height: '280px', marginBottom: '24px', borderRadius: '0', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--color-deep-blue)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)' }}>
                    <div style={{ width: '40px', height: '40px', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', fontSize: '20px' }}>DJ</div>
                    <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Фото ожидается</span>
                  </div>
                </div>
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
              background: 'var(--gradient-light)', 
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
