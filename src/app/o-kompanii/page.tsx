import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';

export const metadata: Metadata = {
  title: 'О юридической компании «Де-Юре» в Липецке',
  description: 'Информация о юридической компании «Де-Юре»: руководство, специалисты, порядок оказания юридических услуг, офис, контакты и реквизиты.',
  alternates: {
    canonical: 'https://dejure-help.ru/o-kompanii/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'О юридической компании «Де-Юре» в Липецке',
    description: 'Информация о юридической компании «Де-Юре»: руководство, специалисты, порядок оказания юридических услуг, офис, контакты и реквизиты.',
    url: 'https://dejure-help.ru/o-kompanii/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/office-interior-real.webp',
        width: 1600,
        height: 1200,
        alt: 'Консультационный кабинет в офисе коллегии адвокатов «Де-Юре» в Липецке',
      },
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        'name': 'О юридической компании «Де-Юре»',
        'url': 'https://dejure-help.ru/o-kompanii/',
        'description': 'Информация о юридической компании «Де-Юре»: руководство, специалисты, порядок оказания юридических услуг, офис, контакты и реквизиты.',
        'about': {
          '@id': 'https://dejure-help.ru/#organization',
        },
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Главная',
            'item': 'https://dejure-help.ru/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'О компании',
            'item': 'https://dejure-help.ru/o-kompanii/',
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* 1. ПЕРВЫЙ ЭКРАН (HERO) */}
        <section
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: 'clamp(36px, 5vw, 64px) 0 clamp(48px, 6vw, 80px)',
            background: 'var(--gradient-cream)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            {/* Хлебные крошки */}
            <nav aria-label="Хлебные крошки" style={{ marginBottom: '24px' }}>
              <ol
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  fontSize: '13px',
                  color: 'var(--color-text-secondary)',
                  flexWrap: 'wrap',
                }}
              >
                <li>
                  <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Главная
                  </Link>
                </li>
                <li style={{ opacity: 0.5 }}>/</li>
                <li style={{ color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                  О компании
                </li>
              </ol>
            </nav>

            <div
              className="about-hero-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
                gap: 'clamp(32px, 5vw, 56px)',
                alignItems: 'center',
              }}
            >
              {/* Левая колонка — Текст */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span
                    style={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                    }}
                  >
                    О компании
                  </span>
                </div>

                <h1
                  style={{
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    lineHeight: 1.2,
                    margin: '0 0 24px 0',
                    fontWeight: 600,
                  }}
                >
                  О юридической компании «Де-Юре»
                </h1>

                <p
                  style={{
                    fontSize: 'clamp(16px, 1.8vw, 18px)',
                    color: 'var(--color-deep-blue)',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0',
                    fontWeight: 500,
                  }}
                >
                  Помогаем гражданам и бизнесу решать правовые вопросы в Липецке и Липецкой области. По делам, допускающим <Link href="/distancionnaya-yuridicheskaya-pomoshch/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>дистанционную юридическую помощь</Link>, работаем с клиентами из других регионов России.
                </p>

                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 32px 0',
                  }}
                >
                  Определяем профильного специалиста с учётом характера задачи, заранее согласовываем состав работ и фиксируем условия сотрудничества в договоре.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <a
                    href="#form"
                    className="btn btn-primary"
                    style={{ padding: '14px 28px', fontSize: '15px', borderRadius: 0 }}
                  >
                    Обсудить ситуацию
                  </a>
                  <Link
                    href="/specialisty/"
                    className="btn btn-outline"
                    style={{ padding: '14px 28px', fontSize: '15px', borderRadius: 0 }}
                  >
                    Посмотреть специалистов
                  </Link>
                </div>
              </div>

              {/* Правая колонка — Реальная фотография помещения офиса коллегии адвокатов «Де-Юре» */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: 0,
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(16, 39, 59, 0.1)',
                  border: '1px solid rgba(23, 50, 77, 0.1)',
                  background: 'var(--color-white)',
                  aspectRatio: '4 / 3',
                }}
              >
                <img
                  src="/images/office-interior-real.webp"
                  alt="Консультационный кабинет в офисе коллегии адвокатов «Де-Юре» в Липецке"
                  width={600}
                  height={450}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(16, 39, 59, 0.88) 0%, rgba(16, 39, 59, 0.5) 60%, transparent 100%)',
                    padding: '24px 20px 14px',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Кабинет для консультаций: Липецк, ул. Советская, д. 35 · Офис 213</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. О КОМПАНИИ И НАПРАВЛЕНИЯ РАБОТЫ */}
        <section
          className="section"
          style={{
            padding: 'clamp(48px, 6vw, 80px) 0',
            background: 'var(--color-white)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <div style={{ maxWidth: '880px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span
                  style={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                  }}
                >
                  Юридическая компания
                </span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(26px, 3.5vw, 36px)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 24px 0',
                  lineHeight: 1.25,
                }}
              >
                Правовая помощь гражданам и бизнесу
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.7,
                  margin: '0 0 16px 0',
                }}
              >
                ООО ЮК «Де-Юре» оказывает юридические услуги гражданам, предпринимателям и организациям. Специалисты компании консультируют клиентов, анализируют документы, готовят правовые и процессуальные документы, участвуют в переговорах, представляют интересы в судах и государственных органах.
              </p>

              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.7,
                  margin: '0 0 32px 0',
                }}
              >
                Для каждой задачи определяется подходящий специалист и необходимый объём работы. Если вопрос затрагивает несколько отраслей права, состав участников определяется после первичного изучения ситуации.
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <Link
                  href="/grazhdanam/"
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '15px', borderRadius: 0 }}
                >
                  Услуги гражданам →
                </Link>
                <Link
                  href="/biznesu/"
                  className="btn btn-outline"
                  style={{ padding: '14px 28px', fontSize: '15px', borderRadius: 0 }}
                >
                  Услуги бизнесу →
                </Link>
                <Link
                  href="/distancionnaya-yuridicheskaya-pomoshch/"
                  className="btn btn-outline"
                  style={{ padding: '14px 28px', fontSize: '15px', borderRadius: 0 }}
                >
                  Дистанционная помощь →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. РУКОВОДСТВО КОМПАНИИ */}
        <section
          className="section"
          style={{
            padding: 'clamp(48px, 6vw, 80px) 0',
            background: 'var(--gradient-cream)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                }}
              >
                Руководство
              </span>
            </div>

            <div
              className="about-leader-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 340px) minmax(0, 1fr)',
                gap: 'clamp(32px, 5vw, 56px)',
                alignItems: 'center',
                marginTop: '24px',
              }}
            >
              {/* Фотография руководителя — 4:5 */}
              <div
                className="about-leader-photo-wrapper"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(16, 39, 59, 0.1)',
                  border: '1px solid rgba(23, 50, 77, 0.1)',
                  aspectRatio: '4 / 5',
                  background: 'var(--color-white)',
                }}
              >
                <img
                  src="/images/bobkin.webp"
                  alt="Аркадий Евгеньевич Бобкин — директор ЮК «Де-Юре»"
                  width={340}
                  height={425}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              {/* Текст о руководителе */}
              <div>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 8px 0',
                    lineHeight: 1.25,
                  }}
                >
                  Аркадий Евгеньевич Бобкин
                </h2>

                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--color-gold)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                  }}
                >
                  Директор, управляющий партнёр ЮК «Де-Юре»
                </div>

                <p
                  style={{
                    fontSize: '16px',
                    color: 'var(--color-deep-blue)',
                    lineHeight: 1.7,
                    margin: '0 0 28px 0',
                  }}
                >
                  Координирует работу компании и участвует в разработке правовой позиции по сложным уголовным и коммерческим делам. Более 22 лет работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем следственного подразделения.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Link
                    href="/specialisty/bobkin-arkadiy-evgenevich/"
                    className="btn btn-outline"
                    style={{ padding: '12px 24px', fontSize: '14px', borderRadius: 0 }}
                  >
                    Подробнее о руководителе →
                  </Link>
                  <Link
                    href="/specialisty/"
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-primary)',
                      textDecoration: 'underline',
                      fontWeight: 600,
                    }}
                  >
                    Все специалисты ЮК
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. ПОРЯДОК РАБОТЫ */}
        <section
          className="section"
          style={{
            padding: 'clamp(48px, 6vw, 80px) 0',
            background: 'var(--color-white)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                }}
              >
                Порядок работы
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)',
                margin: '0 0 40px 0',
                lineHeight: 1.25,
              }}
            >
              От первого обращения до выполнения задачи
            </h2>

            <div
              className="about-steps-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '24px',
              }}
            >
              {[
                {
                  num: '01',
                  title: 'Первичное обращение',
                  text: 'Уточняем суть вопроса и сообщаем, какие документы потребуются для первоначального разбора.',
                },
                {
                  num: '02',
                  title: 'Выбор специалиста',
                  text: 'Определяем, кто обладает необходимой специализацией и какой формат помощи подходит для решения задачи.',
                },
                {
                  num: '03',
                  title: 'Условия работы',
                  text: 'Согласовываем объём действий, стоимость, порядок оплаты и дополнительные расходы.',
                },
                {
                  num: '04',
                  title: 'Договор и выполнение работ',
                  text: 'Заключаем договор и выполняем предусмотренные им действия. Клиент получает информацию о ходе работы и дальнейших этапах.',
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--gradient-cream)',
                    border: '1px solid rgba(23, 50, 77, 0.1)',
                    borderTop: '3px solid var(--color-primary)',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '28px',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      marginBottom: '12px',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: '0 0 10px 0',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. УЧАСТИЕ НЕЗАВИСИМЫХ СПЕЦИАЛИСТОВ (МОДЕЛЬ ВЗАИМОДЕЙСТВИЯ) */}
        <section
          className="section"
          style={{
            padding: 'clamp(48px, 6vw, 80px) 0',
            background: 'var(--gradient-cream)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                }}
              >
                Модель взаимодействия
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)',
                margin: '0 0 16px 0',
                lineHeight: 1.25,
                maxWidth: '850px',
              }}
            >
              Когда к работе привлекаются независимые специалисты
            </h2>

            <p
              style={{
                fontSize: '16px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: '0 0 36px 0',
                maxWidth: '850px',
              }}
            >
              В зависимости от характера задачи ЮК «Де-Юре» может привлекать независимых адвокатов, экспертов, оценщиков, аудиторов и другие профильные организации.
            </p>

            <div
              className="about-specialists-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '28px',
                marginBottom: '28px',
              }}
            >
              {/* Карточка 1: Услуги ЮК */}
              <div
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid rgba(23, 50, 77, 0.1)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 28px',
                  boxShadow: '0 6px 20px rgba(16, 39, 59, 0.05)',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.3,
                  }}
                >
                  Услуги юридической компании
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--color-deep-blue)',
                    lineHeight: 1.65,
                    margin: 0,
                    opacity: 0.9,
                  }}
                >
                  Работы специалистов ЮК «Де-Юре» выполняются на основании договора, заключённого между клиентом и компанией. В договоре фиксируются состав работ, стоимость и порядок взаимодействия.
                </p>
              </div>

              {/* Карточка 2: Адвокатская помощь */}
              <div
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid rgba(23, 50, 77, 0.1)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '32px 28px',
                  boxShadow: '0 6px 20px rgba(16, 39, 59, 0.05)',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.3,
                  }}
                >
                  Адвокатская помощь
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--color-deep-blue)',
                    lineHeight: 1.65,
                    margin: 0,
                    opacity: 0.9,
                  }}
                >
                  Если для решения задачи требуется адвокатский статус, ЮК может привлечь независимого адвоката соответствующей специализации. Адвокат самостоятельно согласовывает с доверителем условия помощи и заключает с ним отдельное соглашение.
                </p>
              </div>
            </div>

            {/* Спокойный дисклеймер без рамки и иконки тревоги */}
            <p
              style={{
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
                margin: '0 auto',
                paddingTop: '8px',
                maxWidth: '900px',
              }}
            >
              Привлекаемые адвокаты не являются сотрудниками ЮК «Де-Юре» и осуществляют адвокатскую деятельность самостоятельно в соответствии с{' '}
              <a
                href="https://www.consultant.ru/document/cons_doc_LAW_36945/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}
              >
                Федеральным законом № 63-ФЗ
              </a>
              . ЮК взаимодействует с ними на основании соглашений о сотрудничестве. Адвокатская помощь оказывается по отдельному соглашению между адвокатом и доверителем.
            </p>
          </div>
        </section>

        {/* 6. ОФИС КОМПАНИИ */}
        <section
          className="section"
          style={{
            padding: 'clamp(48px, 6vw, 80px) 0',
            background: 'var(--color-white)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                }}
              >
                Офис в Липецке
              </span>
            </div>

            <div
              className="about-office-info-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '32px',
                marginBottom: '36px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 16px 0',
                    lineHeight: 1.25,
                  }}
                >
                  Где мы находимся
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'var(--color-deep-blue)',
                    lineHeight: 1.6,
                    margin: '0 0 10px 0',
                  }}
                >
                  Принимаем клиентов по предварительной записи в офисе в центре Липецка.
                </p>
                <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>
                  <strong>Адрес:</strong> г. Липецк, ул. Советская, д. 35, БЦ «Антарес».
                </div>
                <div style={{ fontSize: '14.5px', color: 'var(--color-text-main)', lineHeight: 1.6, marginTop: '4px' }}>
                  <strong>Маршрут в здании:</strong> центральный вход в БЦ «Антарес», 2-й этаж, офис 213 (коллегия адвокатов «Де-Юре»).
                </div>
                <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginTop: '4px' }}>
                  <strong>Режим работы:</strong> Пн–Пт 09:00–18:00. Сб, Вс — выходной.
                </div>
              </div>

              <div>
                <Link
                  href="/kontakty/"
                  className="btn btn-outline"
                  style={{ padding: '14px 28px', fontSize: '15px', borderRadius: 0, whiteSpace: 'nowrap' }}
                >
                  Контакты и как добраться →
                </Link>
              </div>
            </div>

            {/* 2 фотографии офиса */}
            <div
              className="about-office-photos-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '24px',
              }}
            >
              {/* Фото здания */}
              <div
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid rgba(23, 50, 77, 0.1)',
                  boxShadow: '0 6px 20px rgba(16, 39, 59, 0.05)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  <img
                    src="/images/office-building.webp"
                    alt="Здание бизнес-центра по адресу: Липецк, ул. Советская, 35"
                    width={600}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '14px 18px', fontSize: '13.5px', color: 'var(--color-text-secondary)' }}>
                  Здание БЦ «Антарес», ул. Советская, д. 35
                </div>
              </div>

              {/* Фото входа */}
              <div
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid rgba(23, 50, 77, 0.1)',
                  boxShadow: '0 6px 20px rgba(16, 39, 0.05)',
                  overflow: 'hidden',
                }}
              >
                <div style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  <img
                    src="/images/office-entrance.webp"
                    alt="Вход в здание БЦ „Антарес“ на улице Советской, 35 в Липецке"
                    width={600}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '14px 18px', fontSize: '13.5px', color: 'var(--color-text-secondary)' }}>
                  Вход в здание БЦ „Антарес“
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. СВЕДЕНИЯ О КОМПАНИИ (РЕКВИЗИТЫ) */}
        <section
          className="section"
          style={{
            padding: 'clamp(48px, 6vw, 80px) 0',
            background: 'var(--gradient-cream)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                }}
              >
                Реквизиты
              </span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)',
                margin: '0 0 28px 0',
                lineHeight: 1.25,
              }}
            >
              ООО ЮК «Де-Юре»
            </h2>

            <div
              style={{
                background: 'var(--color-white)',
                border: '1px solid rgba(23, 50, 77, 0.1)',
                borderLeft: '4px solid var(--color-primary)',
                padding: '32px',
                boxShadow: '0 6px 24px rgba(16, 39, 59, 0.05)',
                maxWidth: '850px',
              }}
            >
              <dl
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(180px, 240px) 1fr',
                  rowGap: '16px',
                  columnGap: '20px',
                  margin: '0 0 24px 0',
                  fontSize: '15px',
                }}
                className="about-requisites-dl"
              >
                <dt style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Полное наименование:</dt>
                <dd style={{ margin: 0, color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                  Общество с ограниченной ответственностью Юридическая компания «Де-Юре»
                </dd>

                <dt style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>ИНН:</dt>
                <dd style={{ margin: 0, color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                  4800009680
                </dd>

                <dt style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>ОГРН:</dt>
                <dd style={{ margin: 0, color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                  1234800008464
                </dd>

                <dt style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Директор:</dt>
                <dd style={{ margin: 0, color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                  Бобкин Аркадий Евгеньевич
                </dd>

                <dt style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Фактический адрес:</dt>
                <dd style={{ margin: 0, color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                  г. Липецк, ул. Советская, д. 35, офис 213
                </dd>
              </dl>

              <div style={{ borderTop: '1px solid rgba(23, 50, 77, 0.1)', paddingTop: '18px' }}>
                <Link
                  href="/kontakty/"
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--color-primary)',
                    textDecoration: 'underline',
                    fontWeight: 600,
                  }}
                >
                  Все контакты и реквизиты →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. ФИНАЛЬНАЯ ФОРМА */}
        <div id="form" style={{ scrollMarginTop: '120px' }}></div>
        <section
          className="section bg-white"
          id="consultation"
          style={{ scrollMarginTop: '120px', padding: 'clamp(48px, 6vw, 80px) 0' }}
        >
          <div className="container">
            <div
              className="grid grid-2 main-consultation-grid"
              style={{ gap: 'clamp(32px, 5vw, 60px)', alignItems: 'stretch' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'flex-start',
                  paddingTop: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span
                    style={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                    }}
                  >
                    Связаться с нами
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3.5vw, 36px)',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    marginBottom: '16px',
                    lineHeight: 1.2,
                    marginTop: 0,
                  }}
                >
                  Обсудите ситуацию с юристом
                </h2>

                <p
                  style={{
                    color: 'var(--color-deep-blue)',
                    opacity: 0.9,
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  Кратко опишите ситуацию. Специалист уточнит обстоятельства и сообщит, какие документы потребуются для дальнейшего разбора.
                </p>

                <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="tel:+74742201525"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: 'clamp(20px, 4vw, 24px)',
                      fontWeight: 'bold',
                      color: 'var(--color-deep-blue)',
                      textDecoration: 'none',
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+7 (4742) 20-15-25</span>
                  </a>
                  <span style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                    г. Липецк, ул. Советская, д. 35, оф. 213
                  </span>
                </div>

                <div style={{ marginTop: '16px' }}>
                  <div
                    style={{
                      color: 'var(--color-primary)',
                      fontWeight: 600,
                      fontSize: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Перезвоним в течение 15 минут в рабочее время</span>
                  </div>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.55,
                      margin: '16px 0 0 0',
                      padding: '10px 14px',
                      background: 'rgba(16, 39, 59, 0.04)',
                      borderLeft: '3px solid rgba(16, 39, 59, 0.25)',
                      fontStyle: 'italic',
                    }}
                  >
                    Не указывайте в форме паспортные данные, сведения о здоровье и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.
                    <span
                      style={{
                        display: 'block',
                        marginTop: '4px',
                        color: 'rgba(44,51,64,0.55)',
                        fontSize: '12px',
                        fontStyle: 'italic',
                      }}
                    >
                      Основание: статья 10 № 152-ФЗ.
                    </span>
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'flex-start',
                }}
              >
                <div
                  className="main-consultation-form-card"
                  style={{
                    background: 'var(--gradient-cream)',
                    padding: 'clamp(24px, 4vw, 40px)',
                    borderRadius: '0',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    width: '100%',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxSizing: 'border-box',
                  }}
                >
                  <ContactsForm
                    direction="О компании"
                    title="Оставить заявку"
                    subtitle={<>Перезвоним вам в течение 15 минут в рабочее время.</>}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 991px) {
          .about-hero-grid,
          .about-leader-grid,
          .about-specialists-grid,
          .about-office-photos-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .about-steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 640px) {
          .about-steps-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .about-requisites-dl {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .about-leader-photo-wrapper {
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `,
        }}
      />
    </>
  );
}
