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
      role: 'Директор, управляющий партнёр ЮК «Де-Юре»',
      desc: 'Специализация: уголовно-правовые, налоговые и сложные коммерческие споры. Юридический стаж с 1997 года. Более 22 лет работы в следственных подразделениях МВД и налоговой полиции.',
      img: '/-/images/bobkin.jpg',
      link: '/-/team/bobkin-arkadiy-evgenevich/'
    },
    {
      name: 'Конопкин Дмитрий Сергеевич',
      role: 'Адвокат, партнёр ЮК «Де-Юре»',
      desc: 'Специализация: военное право, защита по уголовным делам. Юридический стаж с 2016 года. Опыт работы в Следственном комитете РФ. Статус адвоката с 2022 года.',
      img: '/-/images/konopkin.jpg',
      link: '/-/team/konopkin-dmitriy-sergeevich/'
    },
    {
      name: 'Смольянинова Марина Валерьевна',
      role: 'Старший юрист ЮК «Де-Юре»',
      desc: 'Специализация: гражданские и семейные споры, недвижимость, взыскание задолженности. Опыт работы в УФССП России более 10 лет, из них 6 лет на руководящих должностях.',
      img: '/-/images/smolyaninova.jpg',
      link: '/-/team/smolyaninova-marina-valerevna/'
    },
    {
      name: 'Гусев Олег Юрьевич',
      role: 'Ведущий юрист ЮК «Де-Юре»',
      desc: 'Специализация: земельные споры, недвижимость, оформление прав на землю, градостроительное право. Опыт судебной работы по земельным и имущественным спорам.',
      img: '/-/images/gusev.jpg',
      link: '/-/team/gusev-oleg-yurevich/'
    },
    {
      name: 'Начешников Владимир Викторович',
      role: 'Ведущий юрист ЮК «Де-Юре»',
      desc: 'Специализация: корпоративное право и банкротство. Опыт работы более 20 лет в сферах налогового законодательства и комплексного сопровождения процедур банкротства физических и юридических лиц.',
      img: '/-/images/nacheshnikov.jpg',
      link: '/-/team/nacheshnikov-vladimir-viktorovich/'
    }
  ];

  return (
    <section className="section bg-cream" id="team">
      <div className="container">
        <div className="flex justify-between items-start" style={{ marginBottom: '50px', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>Команда компании</span>
            </div>
            <h2 style={{ margin: 0, marginBottom: '16px', fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>Наши специалисты</h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Опытные юристы и адвокаты Липецка с профильной специализацией. Бывшие сотрудники прокуратуры, Следственного комитета и службы судебных приставов, обеспечивающие надежную правовую защиту по гражданским, арбитражным и уголовным делам.
            </p>
          </div>
          <div style={{ marginTop: '8px' }}>
            <Link href="/-/team/" className="btn btn-outline" style={{ fontSize: '15px', display: 'inline-block', whiteSpace: 'nowrap' }}>Все специалисты</Link>
          </div>
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
              background: '#FFFFFF', 
              boxShadow: '0 4px 12px rgba(23, 50, 77, 0.15)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label="Предыдущие"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className="carousel-container" ref={scrollRef} style={{ display: 'flex', alignItems: 'stretch', gap: '24px', overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: '16px' }}>
            {team.map((person, index) => (
              <div key={index} className="card team-card carousel-item" style={{ 
                padding: '24px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '300px',
                minWidth: '280px',
                maxWidth: '320px',
                flex: '0 0 auto',
                alignSelf: 'stretch',
                minHeight: '560px',
                background: '#FFFFFF',
                border: '1px solid rgba(16, 39, 59, 0.08)',
                boxShadow: '0 4px 14px rgba(16, 39, 59, 0.05)'
              }}>
                <div>
                  <div style={{ height: '320px', marginBottom: '20px', borderRadius: '0', flexShrink: 0, overflow: 'hidden', position: 'relative', background: 'var(--color-cream)' }}>
                    {person.img ? (
                      <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                    ) : (
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--color-deep-blue)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)' }}>
                        <div style={{ width: '40px', height: '40px', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', fontSize: '20px' }}>DJ</div>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Фото ожидается</span>
                      </div>
                    )}
                  </div>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>{person.name}</h3>
                  <p style={{ color: 'var(--color-gold-text, #80633F)', fontWeight: 600, margin: '0 0 12px 0', fontSize: '13px', lineHeight: 1.4 }}>{person.role}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', margin: '0 0 16px 0', lineHeight: 1.5 }}>{person.desc}</p>
                </div>
                {person.link && (
                  <Link href={person.link} style={{ fontSize: '13px', color: 'var(--color-primary, #10273B)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '16px' }}>
                    <span>Подробнее о специалисте</span>
                    <span>→</span>
                  </Link>
                )}
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
              background: '#FFFFFF', 
              boxShadow: '0 4px 12px rgba(23, 50, 77, 0.15)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label="Следующие"
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
