import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTeamMember, teamData } from '@/data/team';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessBlock from '@/components/ProcessBlock';
import ContactsForm from '@/components/ContactsForm';

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

  const imageUrl = `https://dejure-help.ru/images/${member.slug === 'konopkin-dmitriy-sergeevich' ? 'konopkin.jpg' : 'logo_dark.png'}`;

  return {
    title: member.seo.title,
    description: member.seo.description,
    alternates: {
      canonical: `https://dejure-help.ru/specialisty/${member.slug}/`,
    },
    openGraph: {
      title: member.seo.title,
      description: member.seo.description,
      url: `https://dejure-help.ru/specialisty/${member.slug}/`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${member.name} — адвокат, партнёр ЮК «Де-Юре»`
        }
      ],
    },
  };
}

export default async function SpecialistPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const imageUrl = `https://dejure-help.ru/images/${member.slug === 'konopkin-dmitriy-sergeevich' ? 'konopkin.jpg' : 'logo_dark.png'}`;

  // Generate JSON-LD Person
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://dejure-help.ru/specialisty/${member.slug}/#person`,
    name: member.name,
    jobTitle: 'Адвокат',
    description: 'Реестровый номер 48/812',
    image: imageUrl,
    url: `https://dejure-help.ru/specialisty/${member.slug}/`,
    worksFor: {
      '@type': 'LegalService',
      '@id': 'https://dejure-help.ru/#legalservice',
      name: 'ООО ЮК «Де-Юре»'
    }
  };

  // Generate JSON-LD BreadcrumbList
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Специалисты', item: 'https://dejure-help.ru/specialisty/' },
      { '@type': 'ListItem', position: 3, name: member.name, item: `https://dejure-help.ru/specialisty/${member.slug}/` }
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
            <Link href="/specialisty" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Специалисты</Link>
            <span>/</span>
            <span>{member.name}</span>
          </div>

          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            {/* Info Column */}
            <div>
              <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1.2 }}>
                {member.name}
              </h1>
              <div style={{ fontSize: '18px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '8px', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                {member.status}
              </div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, marginBottom: '24px' }}>
                {member.shortDescription}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {member.facts.map((fact, i) => (
                  <div key={i} style={{ 
                    paddingLeft: '16px', 
                    borderLeft: '3px solid var(--color-gold)', 
                    fontSize: '15px', 
                    color: 'var(--color-deep-blue)', 
                    lineHeight: 1.4,
                    fontWeight: 500
                  }}>
                    {fact}
                  </div>
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
                  alt={`${member.name} — адвокат, партнёр ЮК «Де-Юре»`}
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

      {/* 5. Cases */}
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
      <ProcessBlock 
        title="Как проходит работа по делу"
        subtitle="Каждая юридическая ситуация требует отдельной стратегии, но работа по делу строится последовательно: от первичной оценки и анализа документов до защиты интересов доверителя и контроля результата."
        steps={member.process.map(s => ({
          num: s.step.replace(/^0+/, ''),
          title: s.title,
          desc: s.description
        }))}
        ctaTitle=""
      />

      {/* 8. CTA Form */}
      <section className="section bg-cream" id="consultation" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Запишитесь на консультацию к Дмитрию Сергеевичу Конопкину
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px', textWrap: 'balance' }}>
                Кратко опишите ситуацию. Мы уточним обстоятельства и согласуем время консультации.
              </p>
              
              <div style={{ marginBottom: '32px', borderLeft: '4px solid var(--color-gold)', paddingLeft: '16px' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', fontSize: '18px', marginBottom: '4px' }}>{member.name}</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>{member.status}</div>
              </div>

              <div>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним вам в течение 15 минут<br/>в рабочее время
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-white)', padding: '40px', borderRadius: '4px', boxShadow: '0 8px 16px rgba(16, 39, 59, 0.08)' }}>
              <ContactsForm 
                title="Отправить обращение" 
                subtitle="" 
                hiddenFields={[
                  { name: 'specialist', value: member.name },
                  { name: 'page_url', value: `/specialisty/${member.slug}/` }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
