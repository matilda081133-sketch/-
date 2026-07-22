const fs = require('fs');
const path = require('path');

const pageContent = `import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
      canonical: \`/team/\${member.slug}\`,
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

  return (
    <main className="page-wrapper" style={{ paddingTop: '100px', background: 'var(--color-cream)' }}>
      <Header />
      
      {/* 1. Hero Section - More editorial */}
      <section className="section" style={{ padding: '60px 0', borderBottom: '1px solid var(--color-border)', background: 'var(--color-white)' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ marginBottom: '60px', fontSize: '13px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Главная</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <Link href="/team" style={{ color: 'inherit', textDecoration: 'none' }}>Команда</Link>
            <span style={{ margin: '0 10px' }}>/</span>
            <span style={{ color: 'var(--color-primary)' }}>{member.name}</span>
          </div>

          <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            {/* Photo Column - First on mobile, Left on desktop */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ 
                aspectRatio: '3/4', 
                width: '100%',
                maxWidth: '480px',
                background: 'var(--color-cream)', 
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Info Column */}
            <div>
              <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '20px', fontWeight: 600 }}>
                {member.status}
              </div>
              <h1 style={{ fontSize: '56px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '40px', lineHeight: 1.1 }}>
                {member.name}
              </h1>
              
              <div style={{ paddingLeft: '24px', borderLeft: '2px solid var(--color-gold)', marginBottom: '40px' }}>
                <p style={{ fontSize: '20px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {member.shortDescription}
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                {member.facts.map((fact, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderBottom: i !== member.facts.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                    <span style={{ fontSize: '16px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>{fact}</span>
                  </div>
                ))}
              </div>

              <a href="#consultation" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px', letterSpacing: '0.05em' }}>Связаться со специалистом</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specializations - List layout to avoid empty card spaces */}
      <section className="section" style={{ background: 'var(--color-cream)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>
              Специализация
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--color-border)' }}>
            {member.specializations.map((spec, i) => (
              <div key={i} className="grid grid-2" style={{ gap: '40px', padding: '40px 0', borderBottom: '1px solid var(--color-border)' }}>
                <div>
                  <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 500 }}>{spec.title}</h3>
                </div>
                <div>
                  <ul style={{ paddingLeft: '0', color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.7, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
                    {spec.items.map((item, j) => (
                      <li key={j} style={{ position: 'relative', paddingLeft: '24px' }}>
                        <span style={{ position: 'absolute', left: 0, top: '10px', width: '8px', height: '1px', background: 'var(--color-primary)' }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {spec.link && (
                    <Link href={spec.link.url} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {spec.link.text}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experience & Status - Minimal list layout */}
      <section className="section" style={{ background: 'var(--color-white)', padding: '100px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '80px' }}>
            
            {/* Experience */}
            <div>
              <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '40px' }}>Опыт работы</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {member.experience.map((exp, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: 'var(--color-gold)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>{(i + 1).toString().padStart(2, '0')}</div>
                    <div style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{exp}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geography & Education */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              <div>
                <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>География</h2>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {member.geography}
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>Образование и статус</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>Учебное заведение</div>
                    <div style={{ fontSize: '16px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>{member.education.institution}</div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>{member.education.direction}, {member.education.year}</div>
                  </div>
                  {member.advocateStatus && (
                    <div style={{ paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
                      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '8px', letterSpacing: '0.05em' }}>Реестр адвокатов</div>
                      <div style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>
                        Адвокат, № <a href={\`https://aplo.fparf.ru/\`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>{member.advocateStatus.registryNumber}</a>
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>{member.advocateStatus.chamber}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Process Steps - Vertical layout */}
      <section className="section" style={{ background: 'var(--color-cream)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>
              Как ведётся дело
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {member.process.map((step, i) => (
              <div key={i} style={{ padding: '30px', background: 'var(--color-white)', borderLeft: '2px solid var(--color-primary)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Этап {step.step}</div>
                <h4 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontWeight: 500 }}>{step.title}</h4>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cases - Stacked editorial layout */}
      {member.cases && member.cases.length > 0 && (
        <section className="section" style={{ background: 'var(--color-white)', padding: '100px 0' }}>
          <div className="container">
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '42px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>
                Практика
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {member.cases.map((c, i) => (
                <div key={i} style={{ border: '1px solid var(--color-border)', padding: '40px' }}>
                  <div className="grid grid-2" style={{ gap: '60px' }}>
                    {/* Title Area */}
                    <div>
                      <div style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--color-cream)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '20px', fontWeight: 600 }}>
                        {c.category}
                      </div>
                      <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '28px', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>{c.title}</h4>
                    </div>
                    
                    {/* Details Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                      <div>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px', fontWeight: 600 }}>Проблема</div>
                        <p style={{ fontSize: '16px', margin: 0, lineHeight: 1.6, color: 'var(--color-deep-blue)' }}>{c.problem}</p>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px', fontWeight: 600 }}>Что сделали</div>
                        <p style={{ fontSize: '16px', margin: 0, lineHeight: 1.6, color: 'var(--color-deep-blue)' }}>{c.action}</p>
                      </div>
                      <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Результат</div>
                        <p style={{ fontSize: '18px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{c.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Related Services */}
      <section className="section" style={{ background: 'var(--color-deep-blue)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: '28px', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', marginBottom: '40px', textAlign: 'center' }}>
              Смежные направления
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {member.relatedServices.map((service, i) => (
                <Link key={i} href={service.url} className="btn btn-outline" style={{ padding: '14px 28px', background: 'transparent', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--color-white)' }}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Form */}
      <section id="consultation" className="section" style={{ padding: '100px 0', background: 'var(--color-white)', scrollMarginTop: '80px' }}>
        <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ marginTop: 0, color: 'var(--color-deep-blue)', fontSize: '42px', fontFamily: 'var(--font-serif)', lineHeight: 1.2, marginBottom: '24px' }}>Связаться<br/>со специалистом</h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '500px' }}>
              Кратко опишите ситуацию. Я свяжусь с вами, уточню детали и предложу возможные варианты решения вопроса.
            </p>
          </div>
          
          <div style={{ padding: '40px', background: 'var(--color-cream)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <input type="hidden" name="specialist" value={member.name} />
              <div>
                <input type="text" required placeholder="Ваше имя" style={{ width: '100%', padding: '16px 0', border: 'none', borderBottom: '1px solid var(--color-border)', fontSize: '16px', outline: 'none', background: 'transparent' }} />
              </div>
              
              <div>
                <PhoneInput />
              </div>

              <div>
                <textarea placeholder="Суть вопроса (необязательно)" rows={3} style={{ width: '100%', padding: '16px 0', border: 'none', borderBottom: '1px solid var(--color-border)', fontSize: '16px', outline: 'none', background: 'transparent', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn" style={{ width: '100%', padding: '20px', fontSize: '16px', marginTop: '20px', background: 'var(--color-deep-blue)', color: 'var(--color-white)', border: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Отправить заявку</button>
              
              <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Оставляя заявку, вы соглашаетесь с <Link href="/privacy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>политикой конфиденциальности</Link>.
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
`;

fs.writeFileSync(path.join('src', 'app', 'team', '[slug]', 'page.tsx'), pageContent);
console.log('Finished updating team member page');
