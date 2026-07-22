import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SpecializationsAccordion from '@/components/SpecializationsAccordion';
import { getTeamMember, teamData } from '@/data/team';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneInput from '@/components/PhoneInput';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(teamData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) {
    return { title: 'Специалист не найден' };
  }

  return {
    title: member.seo.title,
    description: member.seo.description,
    alternates: {
      canonical: `/team/${member.slug}`,
    },
    openGraph: {
      title: member.name,
      description: member.status,
      images: [member.image],
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  // Generate JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.status,
    image: `https://dejure-lipetsk.ru${member.image}`,
    url: `https://dejure-lipetsk.ru/team/${member.slug}`,
    worksFor: {
      '@type': 'LegalService',
      name: 'Юридическая компания Де-Юре'
    },
    alumniOf: member.education.institution
  };

  return (
    <main>
      <Header />
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs */}
      <div className="bg-light" style={{ paddingTop: '160px', paddingBottom: '20px', background: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Главная</Link>
            <span>/</span>
            <Link href="/team" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Команда</Link>
            <span>/</span>
            <span>{member.name}</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section style={{ padding: '40px 0 80px 0', background: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
            {/* Info Column */}
            <div>
              <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1.2 }}>
                {member.name}
              </h1>
              <div style={{ fontSize: '18px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '24px' }}>
                {member.status}
              </div>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '40px' }}>
                {member.shortDescription}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {member.facts.map((fact, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>{fact}</span>
                  </div>
                ))}
              </div>

              <a href="#consultation" className="btn">Обсудить ситуацию</a>
            </div>

            {/* Photo Column */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="photo-hover-shadow" style={{ 
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '3/4', 
                background: 'var(--color-cream)', 
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={600}
                  height={800}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Specializations */}
      <section className="section bg-light">
        <div className="container">
          <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '40px' }}>
            Вопросы, с которыми можно обратиться
          </h2>
          <SpecializationsAccordion specializations={member.specializations} />
        </div>
      </section>

      {/* 4. Experience & Process Grid */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '0', borderLeft: '1px solid rgba(23, 50, 77, 0.1)', borderTop: '1px solid rgba(23, 50, 77, 0.1)' }}>
            
            {/* Experience */}
            <div className="usp-card" style={{ padding: '40px', borderRight: '1px solid rgba(23, 50, 77, 0.1)', borderBottom: '1px solid rgba(23, 50, 77, 0.1)', background: 'rgba(255, 255, 255, 0.85)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div className="usp-accent"></div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>Опыт</div>
              <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>Профессиональный опыт</h2>
              <ul style={{ paddingLeft: '20px', color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {member.experience.map((exp, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: exp }}></li>
                ))}
              </ul>
            </div>

            {/* Geography */}
            <div className="usp-card" style={{ padding: '40px', borderRight: '1px solid rgba(23, 50, 77, 0.1)', borderBottom: '1px solid rgba(23, 50, 77, 0.1)', background: 'rgba(255, 255, 255, 0.85)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div className="usp-accent"></div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>Локация</div>
              <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>География практики</h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {member.geography}
              </p>
            </div>

            {/* Education & Status */}
            <div className="usp-card" style={{ padding: '40px', borderRight: '1px solid rgba(23, 50, 77, 0.1)', borderBottom: '1px solid rgba(23, 50, 77, 0.1)', background: 'rgba(255, 255, 255, 0.85)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <div className="usp-accent"></div>
              <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>Квалификация</div>
              <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>Образование и статус</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '4px', letterSpacing: '0.05em' }}>Образование</div>
                  <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)' }}>{member.education.institution}, {member.education.direction}, {member.education.year}</div>
                </div>
                {member.advocateStatus && (
                  <div style={{ paddingBottom: '16px' }}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '4px', letterSpacing: '0.05em' }}>Статус</div>
                    <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                      Адвокат, реестровый номер <a href={`https://aplo.fparf.ru/`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{member.advocateStatus.registryNumber}</a>, {member.advocateStatus.chamber}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Process Steps */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
            {/* Left: Photo */}
            <div style={{ display: 'flex', borderRadius: '4px', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/-/images/team-process.jpg" alt="Как специалист ведёт дело" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', flex: 1 }} />
            </div>

            {/* Right: Content */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ marginTop: 0, fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '30px', lineHeight: 1.2 }}>
                Как специалист ведёт дело
              </h2>
              <div className="grid grid-2" style={{ gap: '0', borderLeft: '1px solid rgba(23, 50, 77, 0.1)', borderTop: '1px solid rgba(23, 50, 77, 0.1)', flex: 1 }}>
                {member.process.map((step, i) => (
                  <div key={i} className="usp-card" style={{ padding: '16px 24px', borderRight: '1px solid rgba(23, 50, 77, 0.1)', borderBottom: '1px solid rgba(23, 50, 77, 0.1)', background: 'rgba(255, 255, 255, 0.85)', position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div className="usp-accent"></div>
                    <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>Этап {step.step}</div>
                    <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontWeight: 600, margin: 0 }}>{step.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.4, margin: 0 }}>{step.description}</p>
                    
                    {/* Golden arrow between left and right cards */}
                    {i % 2 === 0 && (
                      <div style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', background: 'var(--color-white)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(212, 175, 55, 0.3)', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', zIndex: 10 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cases (Mockup for now) */}
      {member.cases && member.cases.length > 0 && (
        <section className="section" style={{ background: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
              <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>Примеры из практики</h2>
            </div>
            
            <div style={{ 
              background: 'rgba(23, 50, 77, 0.03)', 
              padding: '16px 24px', 
              color: 'var(--color-text-secondary)',
              fontSize: '14px',
              marginBottom: '30px',
              borderLeft: '4px solid var(--color-primary)',
              fontStyle: 'italic'
            }}>
              Внимание: Ниже представлены демонстрационные макеты кейсов (заглушки) до утверждения фактуры адвокатом.
            </div>

            <div className="grid grid-2" style={{ gap: '30px' }}>
              {member.cases.map((c, i) => (
                <div key={i} className="card" style={{ padding: '40px', border: 'none', borderRadius: '0', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', boxShadow: '0 15px 40px rgba(23, 50, 77, 0.08)' }}>
                  <div style={{ paddingBottom: '20px', marginBottom: '24px' }}>
                    <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>{c.category}</span>
                    <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>{c.title}</h4>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                    <div>
                      <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
                      <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{c.problem}</p>
                    </div>
                    <div>
                      <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
                      <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{c.action}</p>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '4px', borderLeft: '4px solid var(--color-gold)' }}>
                    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Результат</h5>
                    <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{c.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Related Services */}
      <section className="section bg-light" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '30px' }}>Вопросы, с которыми можно обратиться</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {member.relatedServices.map((service, i) => (
              <Link key={i} href={service.url} className="btn btn-outline" style={{ padding: '12px 24px' }}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Form */}
      <section id="consultation" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--color-white)', scrollMarginTop: '80px' }}>
        <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ marginTop: 0, color: 'var(--color-deep-blue)', fontSize: '36px', fontFamily: 'var(--font-serif)' }}>Обсудите ситуацию со специалистом</h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '500px' }}>
              Кратко опишите вопрос. Мы уточним обстоятельства, скажем, какие документы потребуются, и определим следующий шаг.
            </p>
          </div>
          
          <div className="card" style={{ padding: '40px', borderRadius: '0', background: 'var(--color-white)', boxShadow: '0 20px 40px rgba(23, 50, 77, 0.08)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="hidden" name="specialist" value={member.name} />
              <input type="text" required placeholder="Ваше имя" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', outline: 'none', background: 'var(--color-white)' }} />
              <PhoneInput />
              <textarea placeholder="Краткое описание ситуации (необязательно)" rows={3} style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', outline: 'none', background: 'var(--color-white)', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn" style={{ width: '100%', padding: '18px', fontSize: '18px', marginTop: '10px', background: 'var(--color-deep-blue)', color: 'var(--color-white)', border: 'none' }}>Обсудить ситуацию</button>
              
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '4px' }}>
                <input type="checkbox" required style={{ marginTop: '4px', accentColor: 'var(--color-primary)' }} />
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                  Я даю согласие на <Link href="/privacy" style={{ color: 'var(--color-primary)' }}>обработку персональных данных</Link>
                </span>
              </label>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
