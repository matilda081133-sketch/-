import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import { teamData } from '@/data/team';

export const metadata: Metadata = {
  title: 'Специалисты «Де-Юре»',
  description: 'Специалисты «Де-Юре» в Липецке: юристы ЮК «Де-Юре» и адвокаты Коллегии адвокатов «Де-Юре» по гражданским, уголовным, военным и бизнес-спорам. Опыт, направления работы и персональные страницы.',
  alternates: {
    canonical: 'https://dejure-help.ru/specialisty/',
  },
  openGraph: {
    title: 'Специалисты «Де-Юре»',
    description: 'Специалисты «Де-Юре» в Липецке: юристы ЮК «Де-Юре» и адвокаты Коллегии адвокатов «Де-Юре» по гражданским, уголовным, военным и бизнес-спорам.',
    url: 'https://dejure-help.ru/specialisty/',
    images: [{
      url: 'https://dejure-help.ru/images/og/specialisty.jpg',
      width: 1200,
      height: 630,
      alt: 'Специалисты «Де-Юре»'
    }],
  },
};

const specialistListRoles: Record<string, string> = {
  'bobkin-arkadiy-evgenevich': 'Директор, управляющий партнёр ЮК «Де-Юре»',
  'konopkin-dmitriy-sergeevich': 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',
  'smolyaninova-marina-valerevna': 'Ведущий юрист ЮК «Де-Юре»',
  'gusev-oleg-yurevich': 'Адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»',
  'nacheshnikov-vladimir-viktorovich': 'Специалист ЮК «Де-Юре»',
  'polozova-elena-anatolevna': 'Юрист ЮК «Де-Юре»'
};

const specialistListDescriptions: Record<string, string> = {
  'bobkin-arkadiy-evgenevich': 'Более 22 лет работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем Следственной части по расследованию организованной преступной деятельности. В «Де-Юре» участвует в разработке правовой позиции по сложным уголовным делам и координирует работу команды специалистов, осуществляющих правовую защиту клиента.',
  'konopkin-dmitriy-sergeevich': 'С 2016 по 2022 год работал в Следственном комитете РФ, расследовал коррупционные и экономические преступления. С 2022 года осуществляет адвокатскую деятельность. Представляет интересы доверителей по военным и уголовным делам.',
  'smolyaninova-marina-valerevna': 'Более 13 лет работала в службе судебных приставов,\nв том числе на руководящих должностях. Более пяти лет\nпредставляет интересы граждан по семейным и трудовым\nспорам, а также вопросам исполнительного производства.',
  'gusev-oleg-yurevich': 'Более 15 лет работал в органах прокуратуры Липецкой области,\nв том числе заместителем прокурора района. С 2015 года\nосуществляет адвокатскую деятельность. Защищает доверителей по уголовным делам общеуголовной и экономической направленности.',
  'nacheshnikov-vladimir-viktorovich': 'С 1997 года сопровождает корпоративные процедуры и проекты по изменению структуры бизнеса. Работал в различных регионах России и Республике Беларусь. Консультирует, готовит документы и координирует досудебные этапы корпоративных процедур.',
  'polozova-elena-anatolevna': 'Специалист по гражданским делам. Оказывает юридическую помощь по вопросам военного и трудового права — от консультации и подготовки документов до досудебной работы и обжалования.'
};

const specialistAreas: Record<string, { name: string; href?: string }[]> = {
  'bobkin-arkadiy-evgenevich': [
    { name: 'Уголовное право', href: '/grazhdanam/advokat-po-ugolovnym-delam/' }
  ],
  'konopkin-dmitriy-sergeevich': [
    { name: 'Военное право', href: '/grazhdanam/voennyj-yurist/' },
    { name: 'Уголовное право', href: '/grazhdanam/advokat-po-ugolovnym-delam/' }
  ],
  'smolyaninova-marina-valerevna': [
    { name: 'Исполнительное производство', href: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
    { name: 'Семейное право', href: '/grazhdanam/semejnyj-yurist/' },
    { name: 'Трудовое право', href: '/grazhdanam/trudovoj-yurist/' }
  ],
  'gusev-oleg-yurevich': [
    { name: 'Общеуголовные дела', href: '/grazhdanam/advokat-po-ugolovnym-delam/' },
    { name: 'Преступления экономической направленности', href: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/' }
  ],
  'nacheshnikov-vladimir-viktorovich': [
    { name: 'Корпоративные процедуры и сопровождение бизнеса', href: '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/' },
    { name: 'Создание, реорганизация и ликвидация компаний', href: '/biznesu/korporativnyj-yurist/' },
    { name: 'Корпоративное управление и сделки с долями', href: '/biznesu/korporativnyj-yurist/' }
  ],
  'polozova-elena-anatolevna': [
    { name: 'Военное право', href: '/grazhdanam/voennyj-yurist/' },
    { name: 'Трудовое право' }
  ]
};

const specialistAlts: Record<string, string> = {
  'bobkin-arkadiy-evgenevich': 'Аркадий Евгеньевич Бобкин — управляющий партнёр ЮК Де-Юре',
  'konopkin-dmitriy-sergeevich': 'Дмитрий Сергеевич Конопкин — адвокат, председатель Коллегии адвокатов «Де-Юре»',
  'smolyaninova-marina-valerevna': 'Марина Валерьевна Смольянинова — ведущий юрист ЮК Де-Юре',
  'gusev-oleg-yurevich': 'Олег Юрьевич Гусев — адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»',
  'nacheshnikov-vladimir-viktorovich': 'Владимир Викторович Начешников — специалист ЮК Де-Юре',
  'polozova-elena-anatolevna': 'Елена Анатольевна Полозова — юрист ЮК Де-Юре'
};

export default function SpecialistyPage() {
  const specialists = Object.values(teamData);

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://dejure-help.ru/specialisty/#webpage',
        'url': 'https://dejure-help.ru/specialisty/',
        'name': 'Специалисты «Де-Юре»',
        'description': 'Специалисты «Де-Юре» в Липецке: юристы ЮК «Де-Юре» и адвокаты Коллегии адвокатов «Де-Юре» по гражданским, уголовным, военным и бизнес-спорам.'
      },
      {
        '@type': 'ItemList',
        '@id': 'https://dejure-help.ru/specialisty/#itemlist',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'item': {
              '@type': 'Person',
              'name': 'Бобкин Аркадий Евгеньевич',
              'jobTitle': 'Директор, управляющий партнёр ЮК «Де-Юре»',
              'image': 'https://dejure-help.ru/images/bobkin.jpg',
              'url': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/',
              'worksFor': {
                '@type': 'LegalService',
                'name': 'ООО ЮК «Де-Юре»',
                'url': 'https://dejure-help.ru/'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'item': {
              '@type': 'Person',
              'name': 'Конопкин Дмитрий Сергеевич',
              'jobTitle': 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',
              'image': 'https://dejure-help.ru/images/konopkin.jpg',
              'url': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/',
              'memberOf': {
                '@type': 'Organization',
                'name': 'Коллегия адвокатов «Де-Юре»'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'item': {
              '@type': 'Person',
              'name': 'Смольянинова Марина Валерьевна',
              'jobTitle': 'Ведущий юрист ЮК «Де-Юре»',
              'image': 'https://dejure-help.ru/images/smolyaninova.jpg',
              'url': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/',
              'worksFor': {
                '@type': 'LegalService',
                'name': 'ООО ЮК «Де-Юре»',
                'url': 'https://dejure-help.ru/'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'item': {
              '@type': 'Person',
              'name': 'Гусев Олег Юрьевич',
              'jobTitle': 'Адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»',
              'image': 'https://dejure-help.ru/images/gusev.jpg',
              'url': 'https://dejure-help.ru/specialisty/gusev-oleg-yurevich/',
              'memberOf': {
                '@type': 'Organization',
                'name': 'Коллегия адвокатов «Де-Юре»'
              }
            }
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'item': {
              '@type': 'Person',
              'name': 'Начешников Владимир Викторович',
              'jobTitle': 'Специалист ЮК «Де-Юре»',
              'image': 'https://dejure-help.ru/images/nacheshnikov.jpg',
              'url': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
              'worksFor': {
                '@type': 'LegalService',
                'name': 'ООО ЮК «Де-Юре»',
                'url': 'https://dejure-help.ru/'
              }
            }
          }
        ]
      }
    ]
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
      { '@type': 'ListItem', position: 2, name: 'О компании', item: 'https://dejure-help.ru/o-kompanii/' },
      { '@type': 'ListItem', position: 3, name: 'Специалисты', item: 'https://dejure-help.ru/specialisty/' }
    ]
  };

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* 1. First Screen (Hero Section) */}
      <section style={{ padding: '140px 0 36px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', flexWrap: 'wrap', marginBottom: '20px' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Главная</Link>
            <span>/</span>
            <Link href="/o-kompanii" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>О компании</Link>
            <span>/</span>
            <span>Специалисты</span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(30px, 3.8vw, 42px)', 
            color: 'var(--color-deep-blue)', 
            fontFamily: 'var(--font-serif)', 
            marginBottom: '16px', 
            lineHeight: 1.2,
            maxWidth: '900px' 
          }}>
            Специалисты «Де-Юре»
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: 'var(--color-text-secondary)', 
            maxWidth: '850px', 
            margin: 0, 
            lineHeight: 1.6 
          }}>
            Помогаем гражданам и бизнесу решать правовые вопросы в Липецке и Липецкой области,<br />
            а при возможности дистанционного сопровождения — по всей России.
          </p>
        </div>
      </section>

      {/* 2. List of Specialist Cards */}
      <section className="section bg-white" style={{ padding: '48px 0 28px 0' }}>
        <div className="container">
          {/* Group 1: ЮК «Де-Юре» */}
          <h2 className="with-accent" style={{ 
            fontSize: 'clamp(26px, 3vw, 32px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)', 
            marginBottom: '32px', 
            marginTop: 0 
          }}>
            Специалисты ЮК «Де-Юре»
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {specialists
              .filter((sp) => sp.orgType === 'legalCompanySpecialist' || (sp.slug !== 'konopkin-dmitriy-sergeevich' && sp.slug !== 'gusev-oleg-yurevich'))
              .map((sp) => {
                const areas = specialistAreas[sp.slug] || [];
                const altText = specialistAlts[sp.slug] || `${sp.name} — ${sp.companyRole || sp.status}`;

                return (
                  <article 
                    key={sp.id} 
                    style={{ 
                      background: 'var(--color-white)', 
                      border: '1px solid rgba(23, 50, 77, 0.12)',
                      borderRadius: '4px',
                      boxShadow: '0 4px 14px rgba(16, 39, 59, 0.08), 0 1px 3px rgba(16, 39, 59, 0.04)',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'stretch',
                      minHeight: '330px'
                    }}
                    className="specialist-card-hover specialist-card-container"
                  >
                    {/* Photo Column (~33% width, 330px) */}
                    <div 
                      className="specialist-photo-col"
                      style={{ 
                        flex: '0 0 330px',
                        width: '330px',
                        maxWidth: '35%',
                        position: 'relative', 
                        overflow: 'hidden',
                        background: 'var(--color-cream)',
                        userSelect: 'none'
                      }}
                    >
                        <img 
                        src={sp.image}
                          alt={altText}
                          style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover', 
                            objectPosition: sp.slug === 'gusev-oleg-yurevich' ? 'center 15%' : sp.slug === 'konopkin-dmitriy-sergeevich' ? 'center 18%' : sp.slug === 'smolyaninova-marina-valerevna' ? 'center 20%' : sp.slug === 'nacheshnikov-vladimir-viktorovich' ? 'center 12%' : 'center 15%',
                            display: 'block' 
                          }}
                        />
                    </div>

                    {/* Content Column */}
                    <div 
                      className="specialist-content-col"
                      style={{ 
                        flex: '1 1 auto',
                        padding: '32px 36px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        gap: '16px'
                      }}
                    >
                      <div>
                        {/* 1. Full Name (FIO) */}
                        <h3 style={{ 
                          fontSize: 'clamp(22px, 2.3vw, 26px)', 
                          fontFamily: 'var(--font-serif)', 
                          color: 'var(--color-deep-blue)', 
                          margin: '0 0 4px 0', 
                          lineHeight: 1.3 
                        }}>
                          <Link href={`/specialisty/${sp.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {sp.slug === 'nacheshnikov-vladimir-viktorovich' ? (
                              <>
                                <span style={{ display: 'block' }}>Начешников</span>
                                <span style={{ display: 'block' }}>Владимир Викторович</span>
                              </>
                            ) : sp.slug === 'konopkin-dmitriy-sergeevich' ? (
                              <>
                                <span style={{ display: 'block' }}>Конопкин</span>
                                <span style={{ display: 'block' }}>Дмитрий Сергеевич</span>
                              </>
                            ) : sp.slug === 'smolyaninova-marina-valerevna' ? (
                              <>
                                <span style={{ display: 'block' }}>Смольянинова</span>
                                <span style={{ display: 'block' }}>Марина Валерьевна</span>
                              </>
                            ) : sp.slug === 'bobkin-arkadiy-evgenevich' ? (
                              <>
                                <span style={{ display: 'block' }}>Бобкин</span>
                                <span style={{ display: 'block' }}>Аркадий Евгеньевич</span>
                              </>
                            ) : sp.slug === 'polozova-elena-anatolevna' ? (
                              <>
                                <span style={{ display: 'block' }}>Полозова</span>
                                <span style={{ display: 'block' }}>Елена Анатольевна</span>
                              </>
                            ) : sp.slug === 'gusev-oleg-yurevich' ? (
                              <>
                                <span style={{ display: 'block' }}>Гусев</span>
                                <span style={{ display: 'block' }}>Олег Юрьевич</span>
                              </>
                            ) : (
                              sp.name
                            )}
                          </Link>
                        </h3>

                        {/* 2. Position / Role */}
                        <div style={{ 
                          fontSize: '14px', 
                          color: '#4A607A', 
                          fontWeight: 500, 
                          marginBottom: '16px'
                        }}>
                          {specialistListRoles[sp.slug] || sp.status}
                        </div>

                        {/* 3. Substantive Description */}
                        <p style={{ 
                          fontSize: '15px', 
                          color: 'var(--color-text-secondary)', 
                          lineHeight: 1.6, 
                          margin: '0 0 20px 0', 
                          maxWidth: '740px',
                          whiteSpace: 'pre-line'
                        }}>
                          {specialistListDescriptions[sp.slug] || sp.shortDescription}
                        </p>

                        {/* 4. Main Practice Areas */}
                        <div style={{ marginBottom: '8px' }}>
                          <div style={{ 
                            fontSize: '13px', 
                            fontWeight: 600, 
                            color: 'var(--color-deep-blue)', 
                            marginBottom: '10px',
                            letterSpacing: '0.02em'
                          }}>
                            Основные направления работы
                          </div>
                          
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {areas.map((area, idx) => (
                              <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                                <span style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '12px' }}>◆</span>
                                {area.href ? (
                                  <Link 
                                    href={area.href} 
                                    className="area-link"
                                    style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                                  >
                                    {area.name} <span className="area-arrow" style={{ opacity: 0, display: 'inline-block', transform: 'translateX(-4px)', transition: 'all 0.2s ease', color: 'var(--color-primary)' }}>→</span>
                                  </Link>
                                ) : (
                                  <span>{area.name}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* 5. Detail Page Text Link */}
                      <div style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                        <Link 
                          href={`/specialisty/${sp.slug}/`} 
                          className="detail-text-link"
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'var(--color-deep-blue)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease'
                          }}
                        >
                          <span>Подробнее о специалисте</span>
                          <span className="detail-arrow" style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>

          {/* Neutral Divider Line between groups */}
          <hr style={{ border: 'none', borderTop: '1px solid rgba(23, 50, 77, 0.1)', margin: '48px 0' }} />

          {/* Group 2: Коллегия адвокатов «Де-Юре» */}
          <h2 className="with-accent" style={{ 
            fontSize: 'clamp(26px, 3vw, 32px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)', 
            marginBottom: '32px', 
            marginTop: 0 
          }}>
            Адвокаты Коллегии адвокатов «Де-Юре»
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {specialists
              .filter((sp) => sp.orgType === 'barAssociationLawyer' || sp.slug === 'konopkin-dmitriy-sergeevich' || sp.slug === 'gusev-oleg-yurevich')
              .map((sp) => {
                const areas = specialistAreas[sp.slug] || [];
                const altText = specialistAlts[sp.slug] || `${sp.name} — ${sp.companyRole || sp.status}`;

                return (
                  <article 
                    key={sp.id} 
                    style={{ 
                      background: 'var(--color-white)', 
                      border: '1px solid rgba(23, 50, 77, 0.12)',
                      borderRadius: '4px',
                      boxShadow: '0 4px 14px rgba(16, 39, 59, 0.08), 0 1px 3px rgba(16, 39, 59, 0.04)',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'stretch',
                      minHeight: '330px'
                    }}
                    className="specialist-card-hover specialist-card-container"
                  >
                    {/* Photo Column (~33% width, 330px) */}
                    <div 
                      className="specialist-photo-col"
                      style={{ 
                        flex: '0 0 330px',
                        width: '330px',
                        maxWidth: '35%',
                        position: 'relative', 
                        overflow: 'hidden',
                        background: 'var(--color-cream)',
                        userSelect: 'none'
                      }}
                    >
                        <img 
                          src={sp.image.startsWith('/-/') ? sp.image : `/-${sp.image.startsWith('/') ? '' : '/'}${sp.image}`} 
                          alt={altText}
                          style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover', 
                            objectPosition: sp.slug === 'gusev-oleg-yurevich' ? 'center 15%' : sp.slug === 'konopkin-dmitriy-sergeevich' ? 'center 18%' : sp.slug === 'smolyaninova-marina-valerevna' ? 'center 20%' : sp.slug === 'nacheshnikov-vladimir-viktorovich' ? 'center 12%' : 'center 15%',
                            display: 'block' 
                          }}
                        />
                    </div>

                    {/* Content Column */}
                    <div 
                      className="specialist-content-col"
                      style={{ 
                        flex: '1 1 auto',
                        padding: '32px 36px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        gap: '16px'
                      }}
                    >
                      <div>
                        {/* 1. Full Name (FIO) */}
                        <h3 style={{ 
                          fontSize: 'clamp(22px, 2.3vw, 26px)', 
                          fontFamily: 'var(--font-serif)', 
                          color: 'var(--color-deep-blue)', 
                          margin: '0 0 4px 0', 
                          lineHeight: 1.3 
                        }}>
                          <Link href={`/specialisty/${sp.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {sp.slug === 'nacheshnikov-vladimir-viktorovich' ? (
                              <>
                                <span style={{ display: 'block' }}>Начешников</span>
                                <span style={{ display: 'block' }}>Владимир Викторович</span>
                              </>
                            ) : sp.slug === 'konopkin-dmitriy-sergeevich' ? (
                              <>
                                <span style={{ display: 'block' }}>Конопкин</span>
                                <span style={{ display: 'block' }}>Дмитрий Сергеевич</span>
                              </>
                            ) : sp.slug === 'smolyaninova-marina-valerevna' ? (
                              <>
                                <span style={{ display: 'block' }}>Смольянинова</span>
                                <span style={{ display: 'block' }}>Марина Валерьевна</span>
                              </>
                            ) : sp.slug === 'bobkin-arkadiy-evgenevich' ? (
                              <>
                                <span style={{ display: 'block' }}>Бобкин</span>
                                <span style={{ display: 'block' }}>Аркадий Евгеньевич</span>
                              </>
                            ) : sp.slug === 'gusev-oleg-yurevich' ? (
                              <>
                                <span style={{ display: 'block' }}>Гусев</span>
                                <span style={{ display: 'block' }}>Олег Юрьевич</span>
                              </>
                            ) : (
                              sp.name
                            )}
                          </Link>
                        </h3>

                        {/* 2. Position / Role */}
                        <div style={{ 
                          fontSize: '14px', 
                          color: '#4A607A', 
                          fontWeight: 500, 
                          marginBottom: '16px'
                        }}>
                          {specialistListRoles[sp.slug] || sp.status}
                        </div>

                        {/* 3. Substantive Description */}
                        <p style={{ 
                          fontSize: '15px', 
                          color: 'var(--color-text-secondary)', 
                          lineHeight: 1.6, 
                          margin: '0 0 20px 0', 
                          maxWidth: '740px',
                          whiteSpace: 'pre-line'
                        }}>
                          {specialistListDescriptions[sp.slug] || sp.shortDescription}
                        </p>

                        {/* 4. Main Practice Areas */}
                        <div style={{ marginBottom: '8px' }}>
                          <div style={{ 
                            fontSize: '13px', 
                            fontWeight: 600, 
                            color: 'var(--color-deep-blue)', 
                            marginBottom: '10px',
                            letterSpacing: '0.02em'
                          }}>
                            Основные направления работы
                          </div>
                          
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {areas.map((area, idx) => (
                              <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                                <span style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '12px' }}>◆</span>
                                {area.href ? (
                                  <Link 
                                    href={area.href} 
                                    className="area-link"
                                    style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                                  >
                                    {area.name} <span className="area-arrow" style={{ opacity: 0, display: 'inline-block', transform: 'translateX(-4px)', transition: 'all 0.2s ease', color: 'var(--color-primary)' }}>→</span>
                                  </Link>
                                ) : (
                                  <span>{area.name}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* 5. Detail Page Text Link */}
                      <div style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
                        <Link 
                          href={`/specialisty/${sp.slug}/`} 
                          className="detail-text-link"
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '15px',
                            fontWeight: 600,
                            color: 'var(--color-deep-blue)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease'
                          }}
                        >
                          <span>Подробнее о специалисте</span>
                          <span className="detail-arrow" style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>

          {/* Organization Relationship Disclaimer (rendered conditionally if advocates exist) */}
          {specialists.some((sp) => sp.orgType === 'barAssociationLawyer' || sp.slug === 'konopkin-dmitriy-sergeevich' || sp.slug === 'gusev-oleg-yurevich') && (
            <p style={{ 
              fontSize: '14px', 
              color: 'var(--color-text-secondary)', 
              lineHeight: 1.6, 
              maxWidth: '850px', 
              marginTop: '24px', 
              marginBottom: 0 
            }}>
              Юридическая компания «Де-Юре» взаимодействует с адвокатами Коллегии адвокатов «Де-Юре» по делам, требующим участия адвоката. ЮК и Коллегия являются самостоятельными организациями; адвокатская помощь оказывается на основании соглашения между адвокатом и доверителем.
            </p>
          )}
        </div>

        {/* Global hover styles for card, links, and arrow transitions */}
        <style dangerouslySetInnerHTML={{ __html: `
          .specialist-card-hover:hover {
            border-color: rgba(193, 160, 102, 0.4) !important;
            box-shadow: 0 8px 24px rgba(16, 39, 59, 0.12), 0 2px 6px rgba(16, 39, 59, 0.06) !important;
            background-color: #FFFFFF !important;
          }
          .specialist-card-hover:hover .detail-text-link {
            color: var(--color-gold) !important;
          }
          .specialist-card-hover:hover .detail-arrow {
            transform: translateX(4px) !important;
            color: var(--color-gold) !important;
          }
          .area-link:hover {
            color: var(--color-primary) !important;
          }
          .area-link:hover .area-arrow {
            opacity: 1 !important;
            transform: translateX(2px) !important;
          }
          .detail-text-link:hover {
            color: var(--color-primary) !important;
          }
          .detail-text-link:hover .detail-arrow {
            transform: translateX(4px) !important;
          }
          @media (max-width: 991px) {
            .specialist-card-container {
              flex-direction: column !important;
              min-height: auto !important;
            }
            .specialist-photo-col {
              width: 100% !important;
              max-width: 100% !important;
              flex: 0 0 300px !important;
              height: 300px !important;
            }
            .specialist-content-col {
              padding: 24px 20px !important;
            }
          }
        `}} />
      </section>

      {/* 3. Model of Work Section */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '70px 0', background: 'var(--color-white)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Модель работы ЮК «Де-Юре»
            </span>
          </div>
          
          <h2 style={{ 
            marginBottom: '16px', 
            fontSize: 'clamp(28px, 3.2vw, 42px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            textAlign: 'left',
            textWrap: 'balance',
            marginTop: 0
          }}>
            Работа над делом — под контролем профильного куратора
          </h2>

          <p style={{ 
            fontSize: '16px', 
            color: 'var(--color-text-secondary)', 
            lineHeight: 1.7, 
            maxWidth: '820px', 
            marginBottom: '40px'
          }}>
            После первичного разбора компания определяет ответственного за ведение обращения. Правовую позицию формирует юрист или адвокат соответствующего профиля, а ответственный специалист координирует работу, сроки и взаимодействие с клиентом.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            borderTop: '1px solid var(--color-primary)', 
            borderLeft: '1px solid rgba(23, 50, 77, 0.1)',
            borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
            marginBottom: '32px'
          }}>
            {[
              {
                tag: "Стратегия",
                title: "Единая правовая стратегия",
                desc: (
                  <>
                    <span>Профильный юрист или адвокат</span><br />
                    <span>формирует правовую позицию</span><br />
                    <span>и определяет последовательность</span><br />
                    <span>действий по делу.</span>
                  </>
                )
              },
              {
                tag: "Команда",
                title: "Необходимые компетенции",
                desc: (
                  <>
                    <span style={{ whiteSpace: 'nowrap' }}>Если задача требует знаний</span><br />
                    <span style={{ whiteSpace: 'nowrap' }}>из нескольких областей права,</span><br />
                    <span style={{ whiteSpace: 'nowrap' }}>к работе подключаются специалисты</span><br />
                    <span style={{ whiteSpace: 'nowrap' }}>соответствующего профиля.</span>
                  </>
                )
              },
              {
                tag: "Надёжность",
                title: "Контроль хода работы",
                desc: (
                  <>
                    <span style={{ whiteSpace: 'nowrap' }}>Куратор контролирует сроки,</span><br />
                    <span style={{ whiteSpace: 'nowrap' }}>документы и согласованность</span><br />
                    <span style={{ whiteSpace: 'nowrap' }}>действий всех участников.</span>
                  </>
                )
              }
            ].map((item, i) => (
              <div key={i} className="usp-card" style={{ 
                padding: '40px', 
                borderRight: '1px solid rgba(23, 50, 77, 0.1)',
                background: 'rgba(247, 244, 237, 0.45)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}>
                <div>
                  <div className="usp-accent"></div>
                  
                  <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.3, minHeight: '54px', display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ 
            fontSize: '15px', 
            color: 'var(--color-text-secondary)', 
            lineHeight: 1.6, 
            margin: 0,
            fontStyle: 'italic',
            borderLeft: '3px solid var(--color-primary)',
            paddingLeft: '16px'
          }}>
            Такая организация работы позволяет сохранить единую стратегию, контроль над ходом дела и всю собранную по нему информацию.
          </p>
        </div>
      </section>

      {/* 4. Final Consultation Form Block */}
      <section className="section bg-cream" id="consultation" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Первичное обращение
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Не знаете, к кому обратиться?
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Вам не нужно самостоятельно определять<br />
                специализацию юриста. Расскажите нам о своей<br />
                ситуации — мы уточним обстоятельства и определим,<br />
                специалист какого профиля сможет вам помочь.
              </p>

              <div>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним в течение<br />
                    15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-white)', padding: '40px', borderRadius: '4px', boxShadow: '0 8px 16px rgba(16, 39, 59, 0.08)' }}>
              <ContactsForm 
                title="Отправить обращение" 
                subtitle="" 
                buttonText="Получить консультацию"
                hiddenFields={[
                  { name: 'page_url', value: '/specialisty/' }
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
