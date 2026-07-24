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
    title: 'Дмитрий Сергеевич Конопкин — адвокат ЮК «ДЕ-ЮРЕ»',
    description: 'Защита по уголовным делам, помощь военнослужащим и по автомобильным спорам.',
    alternates: {
      canonical: `https://dejure-help.ru/team/${member.slug}/`,
    },
    openGraph: {
      title: 'Дмитрий Сергеевич Конопкин — адвокат ЮК «ДЕ-ЮРЕ»',
      description: 'Защита по уголовным делам, помощь военнослужащим и по автомобильным спорам.',
      url: `https://dejure-help.ru/team/${member.slug}/`,
      images: [
        {
          url: `https://dejure-help.ru${member.image}`,
          width: 1200,
          height: 630,
        }
      ],
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  // Generate JSON-LD Person
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Дмитрий Сергеевич Конопкин',
    jobTitle: 'Адвокат, ведущий юрист ООО ЮК «ДЕ-ЮРЕ»',
    image: `https://dejure-help.ru${member.image}`,
    url: `https://dejure-help.ru/team/${member.slug}/`,
    worksFor: {
      '@type': 'LegalService',
      name: 'ООО ЮК «ДЕ-ЮРЕ»'
    }
  };

  // Generate JSON-LD BreadcrumbList
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Специалисты', item: 'https://dejure-help.ru/team/' },
      { '@type': 'ListItem', position: 3, name: member.name, item: `https://dejure-help.ru/team/${member.slug}/` }
    ]
  };

  return (
    <main>
      <Header />
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
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
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                {member.shortDescription}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
                {member.facts.map((fact, i) => (
                  <div key={i} style={{ 
                    paddingLeft: '16px', 
                    borderLeft: '2px solid rgba(193, 160, 102, 0.5)', 
                    fontSize: '15px', 
                    color: 'var(--color-deep-blue)', 
                    lineHeight: 1.5 
                  }} dangerouslySetInnerHTML={{ __html: fact }} />
                ))}
              </div>

              <a href="#consultation" className="btn" data-analytics="consultation-click">Записаться на консультацию</a>
            </div>

            {/* Photo Column */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="photo-hover-shadow" style={{ 
                width: '100%',
                maxWidth: '440px',
                borderRadius: '0',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(23, 50, 77, 0.12)',
                zIndex: 1,
                display: 'block'
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center 35%', display: 'block', filter: 'brightness(1.05)' }}
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
          <div className="grid grid-3" style={{ gap: '24px' }}>
            {member.specializations.map((spec, i) => (
              <div key={i} className="hover-lift" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                padding: '24px', 
                background: 'var(--color-white)', 
                boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06)',
                borderTop: '4px solid var(--color-gold)'
              }}>
                <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', marginTop: 0, lineHeight: 1.3 }}>
                  {spec.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '24px' }}>
                  {spec.description}
                </p>
                <div style={{ flexGrow: 1, marginBottom: '32px' }}>
                  {spec.items.map((item, j) => (
                    <div key={j} style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5, marginBottom: '8px' }}>
                      {item}
                    </div>
                  ))}
                </div>
                {spec.link && (
                  <Link href={spec.link.url} className="btn-outline" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '12px', fontSize: '14px' }} data-analytics="specialization-click" data-direction={spec.title}>
                    {spec.link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Профессиональный опыт и квалификация */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '40px' }}>Профессиональный опыт и квалификация</h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', marginBottom: '60px' }}>
            <div style={{ flex: '1.5 1 400px' }}>
              <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '24px', marginTop: 0 }}>От следственной работы к адвокатской защите</h3>
              <div 
                style={{ fontSize: '16px', color: 'var(--color-deep-blue)', lineHeight: 1.6, whiteSpace: 'pre-line' }}
                dangerouslySetInnerHTML={{ __html: member.experienceText || '' }}
              />
            </div>
            {/* Right Column: Geography */}
            <div style={{ flex: '1 1 300px', alignSelf: 'flex-start' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', margin: '0 0 24px 0', fontFamily: 'var(--font-serif)' }}>Работа по делам в разных регионах</h3>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {member.geography}
                </p>
            </div>
          </div>

          {/* Chronology */}
          {member.experienceChronology && (
            <div style={{ position: 'relative', paddingTop: '10px' }}>
              {/* Horizontal line */}
              <div style={{ position: 'absolute', top: '20px', left: '10px', right: '10px', height: '2px', background: 'rgba(212, 175, 55, 0.3)', zIndex: 0 }} className="d-md-block d-none"></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                {member.experienceChronology.map((item, i) => (
                  <div key={i} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-gold)', border: '4px solid #f9f6f0', boxShadow: '0 0 0 1px rgba(212, 175, 55, 0.3)', marginBottom: '16px' }}></div>
                    <div style={{ fontSize: '20px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '8px', fontWeight: 600 }}>{item.year}</div>
                    <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          )}


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

            <div className="grid grid-3" style={{ gap: '30px' }}>
              {member.cases.slice(0, 3).map((c, i) => (
                <div key={i} className="card" style={{ padding: '40px', border: '1px solid rgba(23, 50, 77, 0.05)', borderRadius: '0', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', boxShadow: '0 25px 50px -12px rgba(23, 50, 77, 0.25), 0 8px 24px rgba(23, 50, 77, 0.08)' }} data-analytics="case-click">
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
            {member.cases.length > 3 && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link href={`/praktika?specialist=${member.slug}`} className="btn-outline" data-analytics="all-cases-click">
                  Все дела из практики
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Process Steps */}
      <section className="section bg-light" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ marginTop: 0, fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1.2 }}>
              Как проходит работа по делу
            </h2>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'stretch' }}>
            {/* Left: Photo */}
            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '1', position: 'relative', borderRadius: '0', overflow: 'hidden', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.12)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/-/images/team-process.jpg" alt="Процесс работы" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
            </div>

            {/* Right: 4 cards (single column) */}
            <div style={{ flex: '1.2 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {member.process.map((step, i) => (
                <div key={i} style={{ padding: '24px', background: 'var(--color-white)', border: '1px solid rgba(23, 50, 77, 0.04)', borderRadius: '0', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.06)' }}>
                  <div style={{ fontSize: '16px', color: 'var(--color-gold)', fontWeight: 600, fontFamily: 'var(--font-serif)', lineHeight: 1 }}>{step.step}</div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{step.title}</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(23, 50, 77, 0.8)', lineHeight: 1.5, margin: 0 }}>{step.description}</p>
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
      

      {/* 8. CTA Form */}
      <section id="consultation" className="section" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '80px 0', 
        background: 'transparent',
        scrollMarginTop: '80px' 
      }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h2 style={{ marginTop: 0, color: 'var(--color-deep-blue)', fontSize: '36px', fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>
              Запишитесь на консультацию к Дмитрию Сергеевичу Конопкину
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Кратко опишите ситуацию и оставьте контактные данные. Мы уточним обстоятельства и согласуем время консультации с Дмитрием Сергеевичем Конопкиным.
            </p>
            <div style={{ marginTop: '16px', borderLeft: '4px solid var(--color-gold)', paddingLeft: '16px' }}>
              <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', fontSize: '18px', marginBottom: '4px' }}>Дмитрий Сергеевич Конопкин</div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>Адвокат, ведущий юрист «Де-Юре»</div>
            </div>
          </div>
          
          <div className="card" style={{ flex: '1', padding: '40px', borderRadius: '0', background: 'var(--color-white)', boxShadow: '0 20px 40px rgba(23, 50, 77, 0.08)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} data-analytics="consultation-form">
              <input type="hidden" name="specialist" value="Конопкин Дмитрий Сергеевич" />
              <input type="hidden" name="page_url" value={`/team/${member.slug}`} />
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <input type="text" required placeholder="Ваше имя" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', outline: 'none', background: 'var(--color-white)', width: '100%' }} />
                <PhoneInput />
              </div>
              
              <textarea placeholder="Краткое описание ситуации (необязательно)" rows={3} style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', outline: 'none', background: 'var(--color-white)', resize: 'vertical', width: '100%' }}></textarea>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
                <button type="submit" className="btn" style={{ width: '100%', padding: '18px', fontSize: '18px', background: 'var(--color-deep-blue)', color: 'var(--color-white)', border: 'none' }}>Записаться на консультацию</button>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                  <input type="checkbox" required style={{ marginTop: '4px', accentColor: 'var(--color-primary)' }} />
                  <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    Я даю согласие на <Link href="/privacy" style={{ color: 'var(--color-primary)' }}>обработку персональных данных</Link>
                  </span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
      </div> {/* End Shared Wrapper 7-8 */}

      <Footer />
    </main>
  );
}
