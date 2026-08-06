'use client';

import { useRef } from 'react';
import Link from 'next/link';

interface TeamCarouselProps {
  customTitle?: string;
  customSubtitle?: string;
  filterSlugs?: string[];
}

export default function TeamCarousel({ customTitle, customSubtitle, filterSlugs }: TeamCarouselProps = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -330 : 330;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const team: { name: React.ReactNode; rawName: string; role: string; desc: string; img: string; link: string; imgPosition?: string }[] = [
    {
      name: (
        <>
          <span style={{ display: 'block' }}>Бобкин</span>
          <span style={{ display: 'block' }}>Аркадий Евгеньевич</span>
        </>
      ),
      rawName: 'Бобкин Аркадий Евгеньевич',
      role: 'Директор, управляющий партнёр ЮК «Де-Юре»',
      desc: 'Специализация: уголовно-правовые, налоговые и сложные коммерческие споры. Юридический стаж с 1997 года. Более 22 лет работы в следственных подразделениях МВД и налоговой полиции.',
      img: '/-/images/bobkin.jpg',
      link: '/specialisty/bobkin-arkadiy-evgenevich/',
      imgPosition: 'center 15%'
    },
    {
      name: (
        <>
          <span style={{ display: 'block' }}>Конопкин</span>
          <span style={{ display: 'block' }}>Дмитрий Сергеевич</span>
        </>
      ),
      rawName: 'Конопкин Дмитрий Сергеевич',
      role: 'Адвокат, партнёр ЮК «Де-Юре»',
      desc: 'Специализация: военное право, защита по уголовным делам. Юридический стаж с 2016 года. Опыт работы в Следственном комитете РФ. Статус адвоката с 2022 года.',
      img: '/-/images/konopkin.jpg',
      link: '/specialisty/konopkin-dmitriy-sergeevich/',
      imgPosition: 'center 18%'
    },
    {
      name: (
        <>
          <span style={{ display: 'block' }}>Смольянинова</span>
          <span style={{ display: 'block' }}>Марина Валерьевна</span>
        </>
      ),
      rawName: 'Смольянинова Марина Валерьевна',
      role: 'Старший юрист ЮК «Де-Юре»',
      desc: 'Специализация: гражданские и семейные споры, недвижимость, взыскание задолженности. Опыт работы в УФССП России более 10 лет, из них 6 лет на руководящих должностях.',
      img: '/-/images/smolyaninova.jpg',
      link: '/specialisty/smolyaninova-marina-valerevna/',
      imgPosition: 'center 20%'
    },
    {
      name: (
        <>
          <span style={{ display: 'block' }}>Гусев</span>
          <span style={{ display: 'block' }}>Олег Юрьевич</span>
        </>
      ),
      rawName: 'Гусев Олег Юрьевич',
      role: 'Ведущий юрист ЮК «Де-Юре»',
      desc: 'Специализация: земельные споры, недвижимость, оформление прав на землю, градостроительное право. Опыт судебной работы по земельным и имущественным спорам.',
      img: '/-/images/gusev.jpg',
      link: '/specialisty/gusev-oleg-yurevich/',
      imgPosition: 'center 15%'
    },
    {
      name: (
        <>
          <span style={{ display: 'block' }}>Начешников</span>
          <span style={{ display: 'block' }}>Владимир Викторович</span>
        </>
      ),
      rawName: 'Начешников Владимир Викторович',
      role: 'Специалист по корпоративным процедурам и сопровождению бизнеса',
      desc: 'Специализация: корпоративные процедуры, налоговое законодательство и комплексное сопровождение процедур банкротства физических и юридических лиц.',
      img: '/-/images/nacheshnikov.jpg',
      link: '/specialisty/nacheshnikov-vladimir-viktorovich/',
      imgPosition: 'center 12%'
    }
  ];

  const displayedTeam = filterSlugs && filterSlugs.length > 0
    ? team.filter(p => filterSlugs.some(slug => p.link.includes(slug)))
    : team;

  return (
    <section className="section bg-cream" id="team">
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>Команда компании</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>{customTitle || 'Наши специалисты'}</h2>
            <Link href="/specialisty/" className="btn btn-outline" style={{ fontSize: '15px', display: 'inline-block', whiteSpace: 'nowrap' }}>Все специалисты</Link>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, maxWidth: '800px' }}>
            {customSubtitle || 'Опытные юристы и адвокаты Липецка с профильной специализацией. Бывшие сотрудники прокуратуры, Следственного комитета и службы судебных приставов, обеспечивающие надежную правовую защиту по гражданским, арбитражным и уголовным делам.'}
          </p>
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
            {displayedTeam.map((person, index) => (
              <div key={index} className="card team-card carousel-item" style={{ 
                padding: '24px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '300px',
                minWidth: '280px',
                maxWidth: '320px',
                height: '600px',
                flex: '0 0 300px',
                background: '#FFFFFF',
                border: '1px solid rgba(16, 39, 59, 0.08)',
                boxShadow: '0 4px 14px rgba(16, 39, 59, 0.05)',
                boxSizing: 'border-box'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', overflow: 'hidden' }}>
                  <Link href={person.link} style={{ display: 'block', height: '270px', width: '100%', marginBottom: '16px', borderRadius: '0', flexShrink: 0, overflow: 'hidden', position: 'relative', background: 'var(--color-cream)', textDecoration: 'none' }}>
                    {person.img ? (
                      <img src={person.img} alt={person.rawName} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: person.imgPosition || 'center 15%' }} loading="lazy" />
                    ) : (
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--color-deep-blue)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)' }}>
                        <div style={{ width: '40px', height: '40px', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', fontSize: '20px' }}>DJ</div>
                        <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Фото ожидается</span>
                      </div>
                    )}
                  </Link>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.3, minHeight: '52px', display: 'block' }}>
                    <Link href={person.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {person.name}
                    </Link>
                  </h3>
                  <p style={{ color: 'var(--color-gold-text, #80633F)', fontWeight: 600, margin: '0 0 10px 0', fontSize: '13px', lineHeight: 1.35, minHeight: '36px', display: 'flex', alignItems: 'flex-start' }}>{person.role}</p>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', margin: 0, lineHeight: 1.45, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>{person.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(16, 39, 59, 0.08)', flexShrink: 0 }}>
                  {person.link && (
                    <Link href={person.link} className="spec-card-link" style={{ fontSize: '13px', color: 'var(--color-primary, #10273B)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <span>Подробнее о специалисте</span>
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .team-card {
              transition: all 0.3s ease;
              height: 600px !important;
              min-height: 600px !important;
              max-height: 600px !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: space-between !important;
              box-sizing: border-box !important;
            }
            .team-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 28px rgba(16, 39, 59, 0.12) !important;
              border-color: rgba(155, 126, 85, 0.5) !important;
            }
            .spec-card-link {
              transition: color 0.3s ease;
            }
            .team-card:hover .spec-card-link {
              color: var(--color-gold, #9B7E55) !important;
            }
            .spec-card-link span:last-child {
              transition: transform 0.3s ease;
              display: inline-block;
            }
            .team-card:hover .spec-card-link span:last-child {
              transform: translateX(4px);
            }
          ` }} />

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
