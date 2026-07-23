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
    alumniOf: member.education?.institution
  };

  return (
    <main>
      <Header />
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1, 2, 3 & 4. Shared Background Wrapper */}
      <div style={{
        background: 'radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.7) 0%, transparent 60%), radial-gradient(at 100% 100%, rgba(225, 218, 205, 0.5) 0%, transparent 60%), radial-gradient(at 80% 50%, rgba(234, 241, 246, 0.8) 0%, transparent 50%), linear-gradient(135deg, var(--color-cream) 0%, #f4f0e6 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>

      {/* 1 & 2. Breadcrumbs & Hero Section */}
      <section style={{ position: 'relative', paddingBottom: '80px', background: 'transparent' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', flexWrap: 'wrap', paddingTop: '160px', paddingBottom: '40px' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Главная</Link>
            <span>/</span>
            <Link href="/team" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Команда</Link>
            <span>/</span>
            <span>{member.name}</span>
          </div>

          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
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

              <a href="#consultation" className="btn">Записаться на консультацию</a>
            </div>

            {/* Photo Column */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="photo-hover-shadow" style={{ 
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '4/5', 
                background: 'var(--color-cream)', 
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(23, 50, 77, 0.12)',
                zIndex: 1
              }}>
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={600}
                  height={750}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'brightness(1.05)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Направления юридической помощи */}
      <section className="section" style={{ background: 'transparent', paddingBottom: '40px' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '40px' }}>Направления юридической помощи</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {member.specializations.map((spec, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '24px 30px', background: 'var(--color-white)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', border: 'none' }}>
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '13px', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '6px' }}>0{i + 1}</div>
                  <h3 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '12px', fontFamily: 'var(--font-serif)', marginTop: 0 }}>{spec.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '16px', flexGrow: 1 }}>{spec.description}</p>
                  {spec.link && (
                    <Link href={spec.link.url} style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                      {spec.link.text}
                    </Link>
                  )}
                </div>
                <div style={{ flex: '2 1 500px' }}>
                  <ul style={{ 
                    listStyleType: 'none', 
                    padding: 0, 
                    margin: 0, 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                    columnGap: '20px', 
                    rowGap: '8px' 
                  }}>
                    {spec.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.4 }}>
                        <span style={{ color: 'var(--color-gold)', marginTop: '2px' }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Профессиональный опыт и квалификация */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '40px' }}>Профессиональный опыт и квалификация</h2>
          
          <div className="grid grid-2" style={{ gap: '40px', marginBottom: '60px' }}>
            <div style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
              {member.experienceText}
            </div>
            {/* Status Compact Card */}
            {member.advocateStatus && (
              <div style={{ background: 'rgba(23, 50, 77, 0.03)', padding: '30px', borderRadius: '16px', borderLeft: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', gap: '16px', alignSelf: 'flex-start' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', margin: 0 }}>Адвокатский статус</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <span>действующий адвокат</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>реестровый номер <a href="https://aplo.fparf.ru/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>{member.advocateStatus.registryNumber}</a></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <span>ведущий юрист «Де-Юре»</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chronology */}
          {member.experienceChronology && (
            <div style={{ position: 'relative', padding: '40px 0', borderTop: '1px solid rgba(23, 50, 77, 0.1)', borderBottom: '1px solid rgba(23, 50, 77, 0.1)', marginBottom: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                {member.experienceChronology.map((item, i) => (
                  <div key={i} style={{ position: 'relative', paddingLeft: '24px' }}>
                    <div style={{ position: 'absolute', left: 0, top: '6px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                    <div style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontWeight: 600, marginBottom: '8px' }}>{item.year}</div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Geography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', margin: 0 }}>География практики</h3>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '800px' }}>
              {member.geography}
            </p>
          </div>
        </div>
      </section>
      </div> {/* End Shared Wrapper 1-4 */}

      {/* 5. Cases (Moved before Process) */}
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
                    <h3 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>{c.title}</h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                    <div>
                      <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px', margin: 0 }}>Проблема</h4>
                      <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{c.problem}</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px', margin: 0 }}>Что сделали</h4>
                      <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>{c.action}</p>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '4px', borderLeft: '4px solid var(--color-gold)' }}>
                    <h4 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600, margin: 0 }}>Результат</h4>
                    <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{c.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Process Steps */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ marginTop: 0, fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1.2 }}>
              Как Дмитрий Конопкин работает по делу
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: 0 }}>
              Каждое дело требует детального погружения и индивидуальной стратегии. Работа строится поэтапно — от первой консультации до защиты интересов в суде.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
            {/* Left: Photo */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
              <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.12)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/-/images/team-process.jpg" alt="Процесс работы" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>

            {/* Right: 4 cards */}
            <div className="grid grid-2" style={{ gap: '20px' }}>
              {member.process.map((step, i) => (
                <div key={i} style={{ padding: '30px', background: 'var(--color-white)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                  <div style={{ fontSize: '48px', color: 'rgba(212, 175, 55, 0.2)', fontWeight: 700, fontFamily: 'var(--font-serif)', lineHeight: 1, marginTop: '-10px' }}>{step.step}</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{step.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shared Wrapper for 7 & 8 */}
      <div style={{
        background: 'radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.7) 0%, transparent 60%), radial-gradient(at 100% 100%, rgba(225, 218, 205, 0.5) 0%, transparent 60%), radial-gradient(at 80% 50%, rgba(234, 241, 246, 0.8) 0%, transparent 50%), linear-gradient(135deg, var(--color-cream) 0%, #f4f0e6 100%)',
        position: 'relative'
      }}>
      
      {/* 7. Related Services */}
      <section className="section" style={{ padding: '60px 0', background: 'transparent' }}>
        <div className="container">
          <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '30px' }}>Вопросы, с которыми можно обратиться</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {member.relatedServices?.map((service, i) => (
              <Link key={i} href={service.url} className="btn btn-outline" style={{ padding: '12px 24px' }}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Form */}
      <section id="consultation" className="section" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '80px 0', 
        background: 'transparent',
        scrollMarginTop: '80px' 
      }}>
        <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h2 style={{ marginTop: 0, color: 'var(--color-deep-blue)', fontSize: '36px', fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>
              Обсудите ситуацию лично со специалистом
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 4px 12px rgba(23, 50, 77, 0.1)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, maxWidth: '400px' }}>
                Кратко опишите вопрос. Мы уточним обстоятельства, скажем, какие документы потребуются, и определим следующий шаг.
              </p>
            </div>
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
      </div> {/* End Shared Wrapper 7-8 */}

      <Footer />
    </main>
  );
}
