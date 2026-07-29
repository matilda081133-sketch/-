import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import { teamData } from '@/data/team';

export const metadata: Metadata = {
  title: 'Специалисты — Юридическая компания «Де-Юре» в Липецке',
  description: 'Команда адвокатов и юристов компании «Де-Юре». Квалифицированная юридическая помощь гражданам и бизнесу в Липецке.',
  alternates: {
    canonical: 'https://dejure-help.ru/specialisty/',
  },
  openGraph: {
    title: 'Специалисты — Юридическая компания «Де-Юре»',
    description: 'Команда адвокатов и юристов компании «Де-Юре» в Липецке.',
    url: 'https://dejure-help.ru/specialisty/',
    images: [{ url: 'https://dejure-help.ru/images/logo_dark.png' }],
  },
};

export default function SpecialistyPage() {
  const specialists = Object.values(teamData);

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Специалисты', item: 'https://dejure-help.ru/specialisty/' }
    ]
  };

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <section style={{ padding: '160px 0 60px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', flexWrap: 'wrap', marginBottom: '32px' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Главная</Link>
            <span>/</span>
            <span>Специалисты</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 4vw, 44px)', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1.2 }}>
            Специалисты
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '720px', margin: 0, lineHeight: 1.6 }}>
            Опытные адвокаты и юристы ЮК «Де-Юре», готовые защищать ваши права и интересы в Липецкой области и других регионах России.
          </p>
        </div>
      </section>

      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '32px' }}>
            {specialists.map((sp) => (
              <div key={sp.id} className="card hover-lift" style={{ 
                background: 'var(--color-white)', 
                border: '1px solid rgba(23, 50, 77, 0.08)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={sp.image} 
                    alt={`${sp.name} — ${sp.status}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }}
                  />
                </div>
                <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                      {sp.name}
                    </h2>
                    <div style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '12px' }}>
                      {sp.status}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
                      {sp.shortDescription}
                    </div>
                  </div>
                  <Link 
                    href={`/specialisty/${sp.slug}/`} 
                    className="btn-outline" 
                    style={{ width: '100%', textAlign: 'center', padding: '12px', fontSize: '14px' }}
                  >
                    Подробнее о специалисте →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="section bg-cream" id="consultation" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Нужна консультация специалиста?
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Оставьте заявку — мы свяжемся с вами в течение 15 минут в рабочее время, уточним детали вашей проблемы и подберём профильного специалиста.
              </p>
            </div>
            <div style={{ background: 'var(--color-white)', padding: '40px', boxShadow: '0 8px 16px rgba(16, 39, 59, 0.08)' }}>
              <ContactsForm title="Отправить обращение" subtitle="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
