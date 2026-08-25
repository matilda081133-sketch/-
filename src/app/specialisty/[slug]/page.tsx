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

  const imageUrl = `https://dejure-help.ru/images/${member.slug === 'konopkin-dmitriy-sergeevich' ? 'konopkin.jpg' : member.slug === 'bobkin-arkadiy-evgenevich' ? 'bobkin.jpg' : member.slug === 'smolyaninova-marina-valerevna' ? 'smolyaninova.jpg' : member.slug === 'gusev-oleg-yurevich' ? 'gusev.jpg' : member.slug === 'nacheshnikov-vladimir-viktorovich' ? 'nacheshnikov.jpg' : 'logo_dark.png'}`;

  return {
    title: member.seo.title,
    description: member.seo.description,
    alternates: {
      canonical: `https://dejure-help.ru/specialisty/${member.slug}/`,
    },
    openGraph: {
      title: member.slug === 'bobkin-arkadiy-evgenevich' ? 'Бобкин Аркадий Евгеньевич — управляющий партнёр ЮК «Де-Юре»' : member.seo.title,
      description: member.slug === 'bobkin-arkadiy-evgenevich' ? 'Управляющий партнёр ЮК «Де-Юре». Сложные уголовные дела, в том числе экономической и коррупционной направленности.' : member.seo.description,
      type: 'profile',
      url: `https://dejure-help.ru/specialisty/${member.slug}/`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: member.slug === 'bobkin-arkadiy-evgenevich'
            ? 'Аркадий Евгеньевич Бобкин — директор, управляющий партнёр ЮК «Де-Юре»'
            : member.slug === 'konopkin-dmitriy-sergeevich'
            ? 'Конопкин Дмитрий Сергеевич — адвокат, председатель Коллегии адвокатов «Де-Юре»'
            : member.slug === 'gusev-oleg-yurevich'
            ? 'Гусев Олег Юрьевич — адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»'
            : member.slug === 'nacheshnikov-vladimir-viktorovich'
            ? 'Владимир Викторович Начешников — специалист ЮК «Де-Юре»'
            : `${member.name} — специалист ЮК «Де-Юре»`
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: member.slug === 'bobkin-arkadiy-evgenevich' ? 'Бобкин Аркадий Евгеньевич — управляющий партнёр ЮК «Де-Юре»' : member.seo.title,
      description: member.slug === 'bobkin-arkadiy-evgenevich' ? 'Сложные уголовные дела, в том числе экономической и коррупционной направленности. 22 года следственного опыта.' : member.seo.description,
      images: [imageUrl]
    }
  };
}

export default async function SpecialistPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const imageUrl = `https://dejure-help.ru/images/${member.slug === 'konopkin-dmitriy-sergeevich' ? 'konopkin.jpg' : member.slug === 'bobkin-arkadiy-evgenevich' ? 'bobkin.jpg' : member.slug === 'smolyaninova-marina-valerevna' ? 'smolyaninova.jpg' : member.slug === 'gusev-oleg-yurevich' ? 'gusev.jpg' : member.slug === 'nacheshnikov-vladimir-viktorovich' ? 'nacheshnikov.jpg' : member.slug === 'polozova-elena-anatolevna' ? 'polozova.jpg' : 'logo_dark.png'}`;

  // Generate JSON-LD Person
  const jsonLdPerson = member.slug === 'bobkin-arkadiy-evgenevich' ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Аркадий Евгеньевич Бобкин',
    jobTitle: 'Директор, управляющий партнёр ЮК «Де-Юре»',
    url: 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/',
    image: 'https://dejure-help.ru/images/bobkin.jpg',
    worksFor: {
      '@type': 'LegalService',
      name: 'ООО ЮК «Де-Юре»',
      url: 'https://dejure-help.ru/'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Воронежский государственный университет'
    }
  } : member.slug === 'konopkin-dmitriy-sergeevich' ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
    name: 'Конопкин Дмитрий Сергеевич',
    jobTitle: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',
    url: 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/',
    image: 'https://dejure-help.ru/images/konopkin.jpg',
    memberOf: {
      '@type': 'Organization',
      name: 'Коллегия адвокатов «Де-Юре»'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Елецкий государственный университет им. И. А. Бунина'
    }
  } : member.slug === 'gusev-oleg-yurevich' ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://dejure-help.ru/specialisty/gusev-oleg-yurevich/#person',
    name: 'Гусев Олег Юрьевич',
    jobTitle: 'Адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»',
    url: 'https://dejure-help.ru/specialisty/gusev-oleg-yurevich/',
    image: 'https://dejure-help.ru/images/gusev.jpg',
    memberOf: {
      '@type': 'Organization',
      name: 'Коллегия адвокатов «Де-Юре»'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Воронежский государственный университет'
    }
  } : member.slug === 'nacheshnikov-vladimir-viktorovich' ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Начешников Владимир Викторович',
    jobTitle: 'Специалист ЮК «Де-Юре»',
    url: 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
    image: 'https://dejure-help.ru/images/nacheshnikov.jpg',
    worksFor: {
      '@type': 'LegalService',
      name: 'ООО ЮК «Де-Юре»',
      url: 'https://dejure-help.ru/'
    }
  } : member.slug === 'polozova-elena-anatolevna' ? {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://dejure-help.ru/specialisty/polozova-elena-anatolevna/#person',
    name: 'Полозова Елена Анатольевна',
    jobTitle: 'Юрист ЮК «Де-Юре»',
    url: 'https://dejure-help.ru/specialisty/polozova-elena-anatolevna/',
    image: 'https://dejure-help.ru/images/polozova.jpg',
    worksFor: {
      '@type': 'LegalService',
      '@id': 'https://dejure-help.ru/#legalservice',
      name: 'ООО ЮК «Де-Юре»'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Российская академия народного хозяйства и государственной службы при Президенте Российской Федерации'
    }
  } : {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://dejure-help.ru/specialisty/${member.slug}/#person`,
    name: member.name,
    jobTitle: member.status,
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
      { '@type': 'ListItem', position: 2, name: 'О компании', item: 'https://dejure-help.ru/o-kompanii/' },
      { '@type': 'ListItem', position: 3, name: 'Специалисты', item: 'https://dejure-help.ru/specialisty/' },
      { '@type': 'ListItem', position: 4, name: member.name, item: `https://dejure-help.ru/specialisty/${member.slug}/` }
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
            <Link href="/o-kompanii" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>О компании</Link>
            <span>/</span>
            <Link href="/specialisty" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Специалисты</Link>
            <span>/</span>
            <span>{member.name}</span>
          </div>

          <div className="grid grid-2 specialist-detail-grid" style={{ gap: '60px', alignItems: 'center' }}>
            {/* Info Column */}
            <div className="specialist-detail-info">
              <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1.2 }}>
                {member.slug === 'konopkin-dmitriy-sergeevich' ? (
                  <>
                    <span style={{ display: 'block' }}>Конопкин</span>
                    <span style={{ display: 'block' }}>Дмитрий Сергеевич</span>
                  </>
                ) : member.slug === 'smolyaninova-marina-valerevna' ? (
                  <>
                    <span style={{ display: 'block' }}>Смольянинова</span>
                    <span style={{ display: 'block' }}>Марина Валерьевна</span>
                  </>
                ) : member.slug === 'bobkin-arkadiy-evgenevich' ? (
                  <>
                    <span style={{ display: 'block' }}>Бобкин</span>
                    <span style={{ display: 'block' }}>Аркадий Евгеньевич</span>
                  </>
                ) : member.slug === 'gusev-oleg-yurevich' ? (
                  <>
                    <span style={{ display: 'block' }}>Гусев</span>
                    <span style={{ display: 'block' }}>Олег Юрьевич</span>
                  </>
                ) : member.slug === 'polozova-elena-anatolevna' ? (
                  <>
                    <span style={{ display: 'block' }}>Полозова</span>
                    <span style={{ display: 'block' }}>Елена Анатольевна</span>
                  </>
                ) : member.slug === 'nacheshnikov-vladimir-viktorovich' ? (
                  <>
                    <span style={{ display: 'block' }}>Начешников</span>
                    <span style={{ display: 'block' }}>Владимир Викторович</span>
                  </>
                ) : (
                  member.name
                )}
              </h1>
              <div style={{ fontSize: '18px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '8px', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
                {member.status}
              </div>
              <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)', fontWeight: 500, marginBottom: '24px', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                {member.shortDescription}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {member.facts.map((fact, i) => (
                  <div key={i} className="specialist-fact-block" style={{ 
                    paddingLeft: '16px', 
                    borderLeft: '3px solid var(--color-gold)', 
                    fontSize: '15px', 
                    color: 'var(--color-deep-blue)', 
                    lineHeight: 1.4,
                    fontWeight: 500
                  }}>
                    {fact === '22 года в следственных подразделениях налоговой полиции и МВД' ? (
                      <>
                        <span className="nowrap-desk">22 года в следственных подразделениях</span><br className="nowrap-desk" />
                        <span className="nowrap-desk">налоговой полиции и МВД</span>
                      </>
                    ) : fact.includes('Следователь по особо важным делам') ? (
                      <>
                        <span className="nowrap-desk">Следователь по особо важным делам;</span><br className="nowrap-desk" />
                        <span className="nowrap-desk">руководитель следственной части</span>
                      </>
                    ) : fact.includes('в том\nчисле') || fact.includes('в том числе') ? (
                      <>
                        <span className="nowrap-desk">Более 13 лет работы в ФССП, в том</span><br className="nowrap-desk" />
                        <span className="nowrap-desk">числе на руководящих должностях</span>
                      </>
                    ) : fact.includes('юридической практики') ? (
                      <>
                        <span className="nowrap-desk">Более пяти лет юридической практики</span><br className="nowrap-desk" />
                        <span className="nowrap-desk">и судебного представительства</span>
                      </>
                    ) : fact.includes('исполнительное') || fact.includes('Трудовые и семейные споры') ? (
                      <>
                        <span className="nowrap-desk">Трудовые и семейные споры,</span><br className="nowrap-desk" />
                        <span className="nowrap-desk">исполнительное производство</span>
                      </>
                    ) : fact.includes('структуры решения') || fact.includes('структуры') ? (
                      <>
                        <span className="nowrap-desk">Комплексное сопровождение от структуры</span><br className="nowrap-desk" />
                        <span className="nowrap-desk">решения до регистрации изменений</span>
                      </>
                    ) : (
                      fact
                    )}
                  </div>
                ))}
              </div>

              <a href="#consultation" className="btn" data-analytics="consultation-click">Записаться на консультацию</a>
            </div>

            {/* Photo Column */}
            <div className="specialist-detail-photo" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div className="photo-hover-shadow" style={{ 
                width: '100%',
                maxWidth: '440px',
                borderRadius: '0',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 14px rgba(16, 39, 59, 0.12)',
                zIndex: 1,
                display: 'block',
                background: 'transparent'
              }}>
                <img 
                  src={member.image} 
                  className="specialist-img-responsive"
                  alt={
                    member.slug === 'konopkin-dmitriy-sergeevich'
                      ? 'Конопкин Дмитрий Сергеевич — адвокат, председатель Коллегии адвокатов «Де-Юре»'
                      : member.slug === 'gusev-oleg-yurevich'
                      ? 'Гусев Олег Юрьевич — адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»'
                      : member.slug === 'bobkin-arkadiy-evgenevich'
                      ? 'Аркадий Евгеньевич Бобкин — директор, управляющий партнёр ЮК «Де-Юре»'
                      : member.slug === 'smolyaninova-marina-valerevna'
                      ? 'Марина Валерьевна Смольянинова — ведущий юрист ЮК «Де-Юре»'
                      : member.slug === 'nacheshnikov-vladimir-viktorovich'
                      ? 'Владимир Викторович Начешников — специалист ЮК «Де-Юре»'
                      : `${member.name} — специалист ЮК «Де-Юре»`
                  }
                  style={{ width: '100%', height: '540px', objectFit: 'cover', objectPosition: member.slug === 'gusev-oleg-yurevich' ? 'center 32%' : member.slug === 'smolyaninova-marina-valerevna' ? 'center 28%' : member.slug === 'konopkin-dmitriy-sergeevich' ? 'center 35%' : member.slug === 'nacheshnikov-vladimir-viktorovich' ? 'center 20%' : 'center 25%', display: 'block', filter: 'brightness(1.05)' }}
                />
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 991px) {
            .specialist-detail-grid {
              display: flex !important;
              flex-direction: column-reverse !important;
              gap: 32px !important;
            }
            .specialist-detail-photo {
              width: 100% !important;
              max-width: 360px !important;
              margin: 0 auto !important;
            }
            .specialist-img-responsive {
              height: 380px !important;
            }
            .nowrap-desk {
              white-space: normal !important;
            }
          }
        `}} />
      </section>

      {/* 3. Направления работы / юридической помощи */}
      <section className="section" style={{ background: 'transparent', paddingBottom: '40px' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '40px' }}>
            {member.slug === 'nacheshnikov-vladimir-viktorovich' ? 'Направления работы' : 'Направления юридической помощи'}
          </h2>
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
                    <div key={j} style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5, marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0, marginTop: '7px' }}></span>
                      <span style={{ flex: 1 }}>{item}</span>
                    </div>
                  ))}
                </div>
                {spec.link ? (
                  <Link href={spec.link.url} className="btn-outline" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '12px', fontSize: '14px', marginTop: 'auto' }} data-analytics="specialization-click" data-direction={spec.title}>
                    {spec.link.text}
                  </Link>
                ) : spec.links && spec.links.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto', width: '100%' }}>
                    {spec.links.map((lnk, k) => (
                      <Link key={k} href={lnk.url} className="btn-outline" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '10px 12px', fontSize: '13px', lineHeight: 1.35 }} data-analytics="specialization-click" data-direction={spec.title}>
                        {lnk.text}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <a href="#consultation" className="btn-outline" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '12px', fontSize: '14px', marginTop: 'auto' }} data-analytics="specialization-click" data-direction={spec.title}>
                    Получить консультацию →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Опыт и профессиональный путь / Практический опыт */}
      <section className="section" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px', marginBottom: '60px', alignItems: 'flex-start' }}>
            {/* Left Column: Section H2 + H3 + text block */}
            <div style={{ width: '100%' }}>
              <h2 style={{ fontSize: '30px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '24px', marginTop: 0, whiteSpace: 'pre-line' }}>
                {member.slug === 'nacheshnikov-vladimir-viktorovich' ? 'Практический опыт' : 'Опыт и профессиональный путь'}
              </h2>

              <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '20px', marginTop: 0, lineHeight: 1.35, whiteSpace: 'pre-line' }}>
                {member.slug === 'gusev-oleg-yurevich'
                  ? 'Опыт работы в прокуратуре\nи адвокатская практика'
                  : member.slug === 'bobkin-arkadiy-evgenevich'
                  ? 'От следственной работы\nк управлению сложными юридическими проектами'
                  : 'Опыт и принципы работы'}
              </h3>
              
              <div 
                style={{ fontSize: '16px', color: 'var(--color-deep-blue)', lineHeight: 1.7, margin: 0, textAlign: 'justify' }}
                dangerouslySetInnerHTML={{ __html: member.experienceText || '' }}
              />
            </div>

            {/* Right Column: Professional Info Card */}
            <div style={{ width: '100%' }}>
              {(member.profileFacts || member.awards) && (
                <div style={{ 
                  width: '100%',
                  background: 'var(--color-white)', 
                  padding: '32px 36px', 
                  borderLeft: '4px solid var(--color-gold)', 
                  boxShadow: '0 4px 18px rgba(23, 50, 77, 0.06)'
                }}>
                {member.profileFacts && member.profileFacts.length > 0 && (
                  <div>
                    <h2 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                      Профессиональные сведения
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {member.profileFacts.map((pf, i) => (
                        <div key={i}>
                          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', fontWeight: 600 }}>
                            {pf.label}
                          </div>
                          <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.3 }}>
                            {pf.label === 'Регистрационные сведения' && member.registryLink ? (
                              <a href={member.registryLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                                {pf.text} ↗
                              </a>
                            ) : (
                              pf.text
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {member.awards && member.awards.length > 0 && (
                  <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(193, 160, 102, 0.2)' }}>
                    <h3 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                      Профессиональные награды
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {member.awards.map((award, i) => (
                        <li key={i} style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                          <span>{award}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                </div>
              )}
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
            
            <div className="grid grid-3" style={{ gap: '30px' }}>
              {member.cases.slice(0, 3).map((c, i) => (
                <div key={i} className="card" style={{ padding: '40px', border: '1px solid rgba(23, 50, 77, 0.05)', borderRadius: '0', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', boxShadow: '0 25px 50px -12px rgba(23, 50, 77, 0.25), 0 8px 24px rgba(23, 50, 77, 0.08)' }} data-analytics="case-click">
                  <div style={{ paddingBottom: '20px', marginBottom: '24px' }}>
                    <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>{c.category}</span>
                    <h3 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{c.title}</h3>
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
        title={member.slug === 'nacheshnikov-vladimir-viktorovich' ? "Как проходит работа над корпоративной задачей" : "Как проходит работа по делу"}
        subtitle={member.slug === 'nacheshnikov-vladimir-viktorovich' 
          ? "Корпоративная задача обычно включает несколько взаимосвязанных действий. Работа строится последовательно: от анализа структуры бизнеса и определения необходимых изменений до подготовки документов, согласования действий участников и регистрации изменений."
          : "Каждая юридическая ситуация требует отдельной стратегии, но работа по делу строится последовательно: от первичной оценки и анализа документов до защиты интересов доверителя и контроля результата."
        }
        steps={[
          ...member.process.map(s => ({
            num: s.step.replace(/^0+/, ''),
            title: s.title,
            desc: s.description
          })),
          ...(member.slug === 'gusev-oleg-yurevich' ? [{
            isBanner: true,
            title: 'Дистанционный\nформат работы',
            desc: 'Работаем с доверителями по всей России. Первичный анализ документов, согласование позиции и подготовка процессуальных обращений проходят в удобном дистанционном формате.'
          }] : [])
        ]}
        />

      {/* 8. CTA Form */}
      <section className="section bg-cream" id="consultation" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, whiteSpace: 'pre-line' }}>
                {member.consultationTitle || `Запишитесь на консультацию к ${member.name}`}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px', textWrap: 'balance' }}>
                {member.consultationSubtitle || 'Кратко опишите ситуацию. Мы уточним обстоятельства и согласуем время консультации.'}
              </p>
              
              <div style={{ marginBottom: '32px', borderLeft: '4px solid var(--color-gold)', paddingLeft: '16px' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', fontSize: '18px', marginBottom: '4px' }}>
                  {member.slug === 'nacheshnikov-vladimir-viktorovich' ? (
                    <>
                      <span style={{ display: 'block' }}>Начешников</span>
                      <span style={{ display: 'block' }}>Владимир Викторович</span>
                    </>
                  ) : member.slug === 'konopkin-dmitriy-sergeevich' ? (
                    <>Конопкин <br />Дмитрий Сергеевич</>
                  ) : member.slug === 'smolyaninova-marina-valerevna' ? (
                    <>Смольянинова <br />Марина Валерьевна</>
                  ) : (
                    member.name
                  )}
                </div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '15px' }}>{member.companyRole || member.status}</div>
              </div>

              <div>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  {member.slug === 'bobkin-arkadiy-evgenevich' ? (
                    'Свяжемся с вами в рабочее время'
                  ) : (
                    <span>Перезвоним в течение 15 минут в рабочее время</span>
                  )}
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '16px 0 0 0', padding: '10px 14px', background: 'rgba(16, 39, 59, 0.04)', borderLeft: '3px solid rgba(16, 39, 59, 0.25)', fontStyle: 'italic' }}>
                  Не указывайте в форме паспортные данные, сведения о здоровье и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.
                  <span style={{ display: 'block', marginTop: '4px', color: 'rgba(44,51,64,0.55)', fontSize: '12px', fontStyle: 'italic' }}>Основание: статья 10 № 152-ФЗ.</span>
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-white)', padding: '40px', borderRadius: '4px', boxShadow: '0 8px 16px rgba(16, 39, 59, 0.08)' }}>
              <ContactsForm 
                title="Отправить обращение" 
                subtitle="" 
                buttonText="Получить консультацию"
                commentPlaceholder="Кратко опишите ситуацию или вопрос…"
                hiddenFields={[
                  { name: 'specialist', value: member.name },
                  { name: 'page_url', value: `/specialisty/${member.slug}/` }
                ]}
              />
              {(member.slug === 'konopkin-dmitriy-sergeevich' || member.slug === 'gusev-oleg-yurevich' || member.orgType === 'barAssociationLawyer') && (
                <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, textAlign: 'center' }}>
                  Адвокатская помощь оказывается на основании соглашения между адвокатом и доверителем.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
