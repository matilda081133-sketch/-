import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPublishedNews, formatNewsDateRu } from '@/data/news';
import { NewsCardArchiveBadge } from '@/components/NewsEventState';

export function generateMetadata(): Metadata {
  const published = getPublishedNews();
  const title = 'Новости юридической компании «Де‑Юре» в Липецке';
  const description =
    'Новости «Де‑Юре» в Липецке: мероприятия, инициативы и события юридической компании';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://dejure-help.ru/o-kompanii/novosti/',
    },
    robots: {
      index: published.length > 0,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: 'https://dejure-help.ru/o-kompanii/novosti/',
      siteName: 'Юридическая компания «Де‑Юре»',
      locale: 'ru_RU',
      type: 'website',
    },
  };
}

export default function CompanyNewsListPage() {
  const articles = getPublishedNews();
  const isSingle = articles.length === 1;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Новости компании',
        url: 'https://dejure-help.ru/o-kompanii/novosti/',
        description:
          'События и инициативы юридической компании «Де‑Юре» в Липецке',
        isPartOf: {
          '@id': 'https://dejure-help.ru/#website',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'О компании',
            item: 'https://dejure-help.ru/o-kompanii/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Новости компании',
            item: 'https://dejure-help.ru/o-kompanii/novosti/',
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

      <main style={{ overflowX: 'hidden' }}>
        <section
          className="news-list-hero"
          style={{
            padding: '164px 0 clamp(32px, 4.5vw, 46px)',
            background: 'var(--gradient-cream)',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <nav aria-label="Хлебные крошки" style={{ marginBottom: '22px' }}>
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
                  <Link href="/" className="news-breadcrumb-link">
                    Главная
                  </Link>
                </li>
                <li aria-hidden="true" style={{ opacity: 0.5 }}>
                  →
                </li>
                <li>
                  <Link href="/o-kompanii/" className="news-breadcrumb-link">
                    О компании
                  </Link>
                </li>
                <li aria-hidden="true" style={{ opacity: 0.5 }}>
                  →
                </li>
                <li style={{ color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                  Новости компании
                </li>
              </ol>
            </nav>

            <h1
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.2,
                margin: '0 0 12px 0',
                fontWeight: 600,
              }}
            >
              Новости компании
            </h1>

            <p
              style={{
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '680px',
              }}
            >
              События и инициативы юридической компании «Де‑Юре» в Липецке
            </p>
          </div>
        </section>

        <section
          style={{
            padding: 'clamp(40px, 5.5vw, 68px) 0 clamp(56px, 7vw, 88px)',
            background: 'var(--color-white)',
          }}
        >
          <div className="container">
            {articles.length === 0 ? (
              <div
                style={{
                  maxWidth: '620px',
                  padding: '32px',
                  background: 'var(--color-cream)',
                  border: '1px solid rgba(23, 50, 77, 0.1)',
                }}
              >
                <p
                  style={{
                    margin: '0 0 16px 0',
                    fontSize: '16px',
                    color: 'var(--color-deep-blue)',
                    lineHeight: 1.6,
                  }}
                >
                  Раздел готовится к запуску. Актуальную информацию о работе компании можно посмотреть на странице «О компании».
                </p>
                <Link
                  href="/o-kompanii/"
                  className="btn btn-outline"
                  style={{ padding: '12px 24px', fontSize: '14px', borderRadius: 0 }}
                >
                  Перейти в раздел «О компании»
                </Link>
              </div>
            ) : (
              <div className={isSingle ? 'news-list-single' : 'news-list-grid'}>
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/o-kompanii/novosti/${article.slug}/`}
                    className="news-card-link"
                  >
                    {article.coverImage && (
                      <div className="news-card-cover-wrap">
                        <img
                          src={article.coverImage}
                          alt={article.coverAlt || article.cardTitle || article.title}
                          width={1200}
                          height={630}
                          loading="eager"
                          decoding="async"
                          style={{
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '1200 / 630',
                            display: 'block',
                          }}
                        />
                      </div>
                    )}

                    <div className="news-card-body">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '8px',
                          marginBottom: '10px',
                        }}
                      >
                        <time
                          dateTime={article.publishedAt}
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--color-gold-text, #80633F)',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {formatNewsDateRu(article.publishedAt)}
                        </time>

                        {article.booking?.endsAtIso && (
                          <NewsCardArchiveBadge
                            endsAtIso={article.booking.endsAtIso}
                            badgeText={article.booking.archiveCardBadgeText}
                          />
                        )}
                      </div>

                      <h2 className="news-card-title">
                        {article.cardTitle || article.title}
                      </h2>

                      <p className="news-card-excerpt">{article.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            main > section.news-list-hero {
              padding-top: 164px !important;
            }
            @media (max-width: 991px) {
              main > section.news-list-hero {
                padding-top: 120px !important;
              }
            }
            .news-breadcrumb-link {
              color: inherit;
              text-decoration: none;
              transition: color 0.2s ease;
            }
            .news-breadcrumb-link:hover {
              color: var(--color-primary);
              text-decoration: underline;
            }
            .news-breadcrumb-link:focus-visible {
              outline: 2px solid var(--color-primary);
              outline-offset: 2px;
            }
            .news-list-single {
              display: block;
              max-width: 440px;
              margin: 0;
            }
            .news-list-grid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 28px;
              align-items: stretch;
            }
            .news-card-link {
              display: flex;
              flex-direction: column;
              height: 100%;
              background: var(--color-white);
              border: 1px solid rgba(23, 50, 77, 0.12);
              box-shadow: 0 4px 16px rgba(16, 39, 59, 0.05);
              text-decoration: none;
              color: inherit;
              transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
              overflow: hidden;
            }
            .news-card-link:hover {
              transform: translateY(-2px);
              border-color: rgba(23, 50, 77, 0.28);
              box-shadow: 0 10px 26px rgba(16, 39, 59, 0.1);
            }
            .news-card-link:focus-visible {
              outline: 3px solid var(--color-primary);
              outline-offset: 3px;
              border-color: var(--color-primary);
            }
            .news-card-cover-wrap {
              width: 100%;
              background: var(--color-deep-blue);
              border-bottom: 1px solid rgba(23, 50, 77, 0.08);
            }
            .news-card-body {
              padding: 22px 24px 26px;
              display: flex;
              flex-direction: column;
              flex: 1 1 auto;
            }
            .news-card-title {
              font-family: var(--font-serif);
              font-size: clamp(19px, 2vw, 22px);
              line-height: 1.35;
              color: var(--color-deep-blue);
              margin: 0 0 10px 0;
              font-weight: 600;
              overflow-wrap: break-word;
            }
            .news-card-excerpt {
              font-size: 15px;
              line-height: 1.6;
              color: var(--color-text-secondary);
              margin: 0;
            }
            @media (max-width: 991px) {
              .news-list-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 24px;
              }
            }
            @media (max-width: 640px) {
              .news-list-single {
                max-width: 100%;
              }
              .news-list-grid {
                grid-template-columns: 1fr;
                gap: 20px;
              }
              .news-card-body {
                padding: 18px 18px 22px;
              }
            }
          `,
        }}
      />
    </>
  );
}
