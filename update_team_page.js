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
    <main className="page-wrapper" style={{ paddingTop: '100px' }}>
      <Header />
      
      {/* 1. Hero Section */}
      <section className="section bg-light" style={{ padding: '60px 0 80px', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ marginBottom: '40px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Главная</Link>
            <span style={{ margin: '0 10px' }}>—</span>
            <Link href="/team" style={{ color: 'inherit', textDecoration: 'none' }}>Команда</Link>
            <span style={{ margin: '0 10px' }}>—</span>
            <span style={{ color: 'var(--color-deep-blue)' }}>{member.name}</span>
          </div>

          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            {/* Info Column */}
            <div>
              <div style={{ display: 'inline-block', padding: '6px 12px', background: 'var(--color-cream)', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px', borderRadius: '2px' }}>
                {member.status}
              </div>
              <h1 style={{ fontSize: '48px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '24px', lineHeight: 1.1 }}>
                {member.name}
              </h1>
              
              <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '600px' }}>
                {member.shortDescription}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {member.facts.map((fact, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {fact}
                  </li>
                ))}
              </ul>

              <a href="#consultation" className="btn">Обсудить ситуацию</a>
            </div>

            {/* Photo Column */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                aspectRatio: '3/4', 
                width: '100%',
                maxWidth: '450px',
                background: 'var(--color-cream)', 
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(23, 50, 77, 0.12)'
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Experience & Geo/Edu (Premium Layout) */}
      <section className="section" style={{ background: 'var(--color-white)', padding: '100px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '80px' }}>
            
            {/* Experience */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--color-primary)' }}></div>
                <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>Профессиональный опыт</h2>
              </div>
              <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '40px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.03)' }}>
                <ul style={{ paddingLeft: '20px', color: 'var(--color-deep-blue)', fontSize: '16px', lineHeight: 1.7, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {member.experience.map((exp, i) => (
                    <li key={i} style={{ paddingLeft: '10px' }}>{exp}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Geography, Education & Status */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
              <div>
                <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>География практики</h2>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {member.geography}
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>Образование и профессиональный статус</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ padding: '24px', background: 'var(--color-cream)', borderRadius: '4px', borderLeft: '4px solid var(--color-gold)' }}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '8px', letterSpacing: '0.05em', fontWeight: 600 }}>Образование</div>
                    <div style={{ fontSize: '16px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>{member.education.institution}</div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>{member.education.direction}, {member.education.year}</div>
                  </div>
                  {member.advocateStatus && (
                    <div style={{ padding: '24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '4px', borderLeft: '4px solid var(--color-deep-blue)' }}>
                      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '8px', letterSpacing: '0.05em', fontWeight: 600 }}>Статус</div>
                      <div style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>
                        Адвокат, реестровый номер <a href={\`https://aplo.fparf.ru/\`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>{member.advocateStatus.registryNumber}</a>
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

      {/* 3. Specializations */}
      <section className="section bg-cream" style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>
              С какими вопросами работает
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-primary)', margin: '20px auto 0' }}></div>
          </div>
          
          <div className="grid grid-3" style={{ gap: '30px' }}>
            {member.specializations.map((spec, i) => (
              <div key={i} style={{ background: 'var(--color-white)', padding: '40px 30px', borderRadius: '4px', borderTop: i === 0 ? '4px solid var(--color-primary)' : '4px solid var(--color-gold)', boxShadow: '0 15px 35px rgba(23, 50, 77, 0.05)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '24px', fontWeight: 600, lineHeight: 1.4 }}>{spec.title}</h3>
                <ul style={{ paddingLeft: '0', color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', flexGrow: 1 }}>
                  {spec.items.map((item, j) => (
                    <li key={j} style={{ position: 'relative', paddingLeft: '20px' }}>
                      <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
                {spec.link && (
                  <Link href={spec.link.url} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', marginTop: '30px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {spec.link.text}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Steps */}
      <section className="section" style={{ background: 'var(--color-white)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: 0 }}>
              Как специалист ведёт дело
            </h2>
            <div style={{ flexGrow: 1, height: '1px', background: 'var(--color-border)' }}></div>
          </div>
          <div className="grid grid-3" style={{ gap: '40px' }}>
            {member.process.map((step, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-cream)', lineHeight: 1, marginBottom: '-15px', position: 'relative', zIndex: 0, paddingLeft: '20px', fontFamily: 'var(--font-serif)' }}>
                  {step.step}
                </div>
                <div style={{ background: 'var(--color-white)', padding: '30px', border: '1px solid var(--color-border)', borderRadius: '4px', position: 'relative', zIndex: 1, boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                  <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontWeight: 600 }}>{step.title}</h4>
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cases (Mockup for now) */}
      {member.cases && member.cases.length > 0 && (
        <section className="section" style={{ background: 'var(--color-deep-blue)', padding: '100px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
              <h2 style={{ fontSize: '36px', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', margin: 0 }}>Примеры из практики</h2>
            </div>
            
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              padding: '16px 24px', 
              color: 'var(--color-white)',
              fontSize: '14px',
              marginBottom: '40px',
              borderLeft: '4px solid var(--color-gold)',
              fontStyle: 'italic',
              opacity: 0.8
            }}>
              Внимание: Ниже представлены демонстрационные макеты кейсов (заглушки) до утверждения фактуры специалистом.
            </div>

            <div className="grid grid-2" style={{ gap: '40px' }}>
              {member.cases.map((c, i) => (
                <div key={i} className="card" style={{ padding: '50px', border: 'none', borderRadius: '4px', background: 'var(--color-white)' }}>
                  <div style={{ paddingBottom: '20px', marginBottom: '30px', borderBottom: '1px solid var(--color-border)' }}>
                    <span style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--color-cream)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '16px', fontWeight: 600, borderRadius: '2px' }}>{c.category}</span>
                    <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '22px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>{c.title}</h4>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1 }}>
                    <div>
                      <h5 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px', fontWeight: 600 }}>Проблема</h5>
                      <p style={{ fontSize: '15px', margin: 0, lineHeight: 1.6, color: 'var(--color-deep-blue)' }}>{c.problem}</p>
                    </div>
                    <div>
                      <h5 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px', fontWeight: 600 }}>Что сделали</h5>
                      <p style={{ fontSize: '15px', margin: 0, lineHeight: 1.6, color: 'var(--color-deep-blue)' }}>{c.action}</p>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: '40px', background: 'var(--color-cream)', padding: '24px', borderRadius: '4px', borderLeft: '4px solid var(--color-primary)' }}>
                    <h5 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Результат</h5>
                    <p style={{ fontSize: '16px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>{c.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Related Services */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '30px', textAlign: 'center' }}>Вопросы, с которыми можно обратиться</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {member.relatedServices.map((service, i) => (
              <Link key={i} href={service.url} className="btn btn-outline" style={{ padding: '14px 28px', background: 'transparent' }}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Form */}
      <section id="consultation" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0', background: 'var(--color-white)', scrollMarginTop: '80px' }}>
        <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '30px', height: '2px', background: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>Оставить заявку</span>
            </div>
            <h2 style={{ marginTop: 0, color: 'var(--color-deep-blue)', fontSize: '42px', fontFamily: 'var(--font-serif)', lineHeight: 1.2, marginBottom: '24px' }}>Обсудите ситуацию<br/>со специалистом</h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '500px' }}>
              Кратко опишите вопрос. Мы уточним обстоятельства, скажем, какие документы потребуются, и определим следующий шаг.
            </p>
          </div>
          
          <div style={{ padding: '50px', borderRadius: '8px', background: 'var(--color-white)', boxShadow: '0 25px 50px rgba(23, 50, 77, 0.08)', border: '1px solid var(--color-border)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <input type="hidden" name="specialist" value={member.name} />
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ваше имя</label>
                <input type="text" required placeholder="Введите ваше имя" style={{ width: '100%', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '16px', outline: 'none', background: 'var(--color-cream)', transition: 'border-color 0.3s' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Номер телефона</label>
                <div style={{ background: 'var(--color-cream)', borderRadius: '4px' }}>
                  <PhoneInput />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Краткое описание (необязательно)</label>
                <textarea placeholder="Опишите суть вопроса" rows={3} style={{ width: '100%', padding: '16px', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '16px', outline: 'none', background: 'var(--color-cream)', resize: 'vertical', transition: 'border-color 0.3s' }}></textarea>
              </div>

              <button type="submit" className="btn" style={{ width: '100%', padding: '20px', fontSize: '16px', marginTop: '10px', background: 'var(--color-deep-blue)', color: 'var(--color-white)', border: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Получить консультацию</button>
              
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', marginTop: '8px' }}>
                <input type="checkbox" required style={{ marginTop: '4px', accentColor: 'var(--color-primary)', width: '16px', height: '16px' }} />
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Я даю согласие на <Link href="/privacy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>обработку персональных данных</Link> в соответствии с политикой конфиденциальности.
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
`;

fs.writeFileSync(path.join('src', 'app', 'team', '[slug]', 'page.tsx'), pageContent);
console.log('Finished updating team member page');
