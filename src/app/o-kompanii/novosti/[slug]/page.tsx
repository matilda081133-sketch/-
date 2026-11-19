import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  newsItems,
  getPublishedNewsBySlug,
  getDraftByPreviewSlug,
  formatNewsDateRu,
  PREVIEW_SLUG_PREFIX,
  NewsItem,
} from '@/data/news';
import {
  NewsEventArchiveNotice,
  NewsBookingActionBlock,
} from '@/components/NewsEventState';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const params: { slug: string }[] = [];

  for (const item of newsItems) {
    if (item.status === 'published') {
      params.push({ slug: item.slug });
    } else {
      params.push({ slug: `${PREVIEW_SLUG_PREFIX}${item.slug}` });
    }
  }

  return params;
}

function resolveArticle(paramSlug: string): {
  article: NewsItem | undefined;
  isDraftPreview: boolean;
} {
  const published = getPublishedNewsBySlug(paramSlug);
  if (published) {
    return { article: published, isDraftPreview: false };
  }
  const draft = getDraftByPreviewSlug(paramSlug);
  if (draft) {
    return { article: draft, isDraftPreview: true };
  }
  return { article: undefined, isDraftPreview: false };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { article, isDraftPreview } = resolveArticle(slug);

  if (!article) {
    return {
      title: 'Страница не найдена',
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `https://dejure-help.ru/o-kompanii/novosti/${article.slug}/`;
  const ogImgPath = article.ogImage || article.coverImage;
  const ogImages = ogImgPath
    ? [
        {
          url: `https://dejure-help.ru${ogImgPath}`,
          width: 1200,
          height: 630,
          alt: article.coverAlt || article.title,
        },
      ]
    : undefined;

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: isDraftPreview
      ? undefined
      : {
          canonical: canonicalUrl,
        },
    robots: isDraftPreview
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: canonicalUrl,
      siteName: 'Юридическая компания «Де‑Юре»',
      locale: 'ru_RU',
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo.title,
      description: article.seo.description,
      images: ogImgPath ? [`https://dejure-help.ru${ogImgPath}`] : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const { article, isDraftPreview } = resolveArticle(slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `https://dejure-help.ru/o-kompanii/novosti/${article.slug}/`;
  const ogImgPath = article.ogImage || article.coverImage;
  const breadcrumbLastLabel = article.breadcrumbTitle || article.title;

  const jsonLdArticle: Record<string, unknown> = {
    '@type': 'Article',
    headline: article.title,
    description: article.seo.description,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    author: {
      '@type': 'Organization',
      name: 'ООО ЮК «Де‑Юре»',
      url: 'https://dejure-help.ru/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ООО ЮК «Де‑Юре»',
      url: 'https://dejure-help.ru/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dejure-help.ru/images/logo_dark.png',
      },
    },
  };

  if (ogImgPath) {
    jsonLdArticle.image = [`https://dejure-help.ru${ogImgPath}`];
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      jsonLdArticle,
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
          {
            '@type': 'ListItem',
            position: 4,
            name: breadcrumbLastLabel,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      {!isDraftPreview && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Header />

      <main style={{ overflowX: 'hidden', background: 'var(--color-white)' }}>
        {isDraftPreview && (
          <div
            role="status"
            style={{
              background: '#EAF1F6',
              borderBottom: '1px solid rgba(23, 50, 77, 0.16)',
              padding: '10px 0',
              fontSize: '13px',
              color: 'var(--color-deep-blue)',
            }}
          >
            <div className="container">
              <strong>Черновик (закрытый предпросмотр).</strong> Страница закрыта от индексации.
            </div>
          </div>
        )}

        <article
          style={{
            padding: 'clamp(28px, 4.5vw, 48px) 0 clamp(52px, 7vw, 84px)',
          }}
        >
          <div className="container">
            {/* 1. Хлебные крошки */}
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
                  <Link href="/" className="news-article-bc-link">
                    Главная
                  </Link>
                </li>
                <li aria-hidden="true" style={{ opacity: 0.5 }}>
                  →
                </li>
                <li>
                  <Link href="/o-kompanii/" className="news-article-bc-link">
                    О компании
                  </Link>
                </li>
                <li aria-hidden="true" style={{ opacity: 0.5 }}>
                  →
                </li>
                <li>
                  <Link
                    href="/o-kompanii/novosti/"
                    className="news-article-bc-link"
                  >
                    Новости компании
                  </Link>
                </li>
                <li aria-hidden="true" style={{ opacity: 0.5 }}>
                  →
                </li>
                <li
                  style={{
                    color: 'var(--color-deep-blue)',
                    fontWeight: 500,
                    overflowWrap: 'anywhere',
                  }}
                >
                  {breadcrumbLastLabel}
                </li>
              </ol>
            </nav>

            {/* Читаемая колонка до 760 px */}
            <div style={{ maxWidth: '760px' }}>
              {/* 2. H1 */}
              <h1
                style={{
                  fontSize: 'clamp(25px, 3.8vw, 38px)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.25,
                  margin: '0 0 14px 0',
                  fontWeight: 600,
                  overflowWrap: 'break-word',
                }}
              >
                {article.title}
              </h1>

              {/* 3. Дата публикации */}
              <time
                dateTime={article.publishedAt}
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-gold-text, #80633F)',
                  marginBottom: '20px',
                  letterSpacing: '0.02em',
                }}
              >
                {formatNewsDateRu(article.publishedAt)}
              </time>

              {/* 4. Вступление */}
              <p
                style={{
                  fontSize: 'clamp(17px, 2vw, 19px)',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.6,
                  fontWeight: 500,
                  margin: '0 0 26px 0',
                }}
              >
                {article.lead}
              </p>

              {/* 5. Обложка целиком 1200×630 без обрезки */}
              {article.coverImage && (
                <figure
                  style={{
                    margin: '0 0 32px 0',
                    width: '100%',
                    border: '1px solid rgba(23, 50, 77, 0.12)',
                    background: 'var(--color-deep-blue)',
                  }}
                >
                  <img
                    src={article.coverImage}
                    alt={article.coverAlt || article.title}
                    width={1200}
                    height={630}
                    fetchPriority="high"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '1200 / 630',
                      display: 'block',
                    }}
                  />
                </figure>
              )}

              {/* Пометка о завершении приёма (автоматически появляется после 15:00 20 ноября 2026 МСК) */}
              {article.booking?.endsAtIso && (
                <NewsEventArchiveNotice
                  endsAtIso={article.booking.endsAtIso}
                  noticeText={article.booking.archiveNoticeText}
                />
              )}

              {/* 6. Основной текст */}
              <div className="news-article-body">
                {article.sections.map((sec, idx) => (
                  <section
                    key={idx}
                    style={{ marginTop: idx === 0 ? 0 : '30px' }}
                  >
                    {sec.subheading && (
                      <h2
                        style={{
                          fontSize: 'clamp(20px, 2.4vw, 25px)',
                          fontFamily: 'var(--font-serif)',
                          color: 'var(--color-deep-blue)',
                          lineHeight: 1.32,
                          margin: '0 0 14px 0',
                          fontWeight: 600,
                        }}
                      >
                        {sec.subheading}
                      </h2>
                    )}

                    {sec.paragraphs &&
                      sec.paragraphs.map((pText, pIdx) => (
                        <p
                          key={pIdx}
                          style={{
                            fontSize: '16px',
                            color: 'var(--color-deep-blue)',
                            lineHeight: 1.7,
                            margin: '0 0 16px 0',
                          }}
                        >
                          {pText}
                        </p>
                      ))}

                    {sec.scheduleRows && sec.scheduleRows.length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          fontSize: '16px',
                          color: 'var(--color-deep-blue)',
                          lineHeight: 1.65,
                        }}
                      >
                        {sec.scheduleRows.map((row, rIdx) => (
                          <p
                            key={rIdx}
                            style={{
                              margin: 0,
                              overflowWrap: 'break-word',
                            }}
                          >
                            {row.label ? (
                              <>
                                <strong>{row.label}</strong> {row.value}
                              </>
                            ) : (
                              row.value
                            )}
                          </p>
                        ))}
                      </div>
                    )}

                    {sec.listItems && sec.listItems.length > 0 && (
                      <ul
                        style={{
                          margin: '8px 0 16px 0',
                          paddingLeft: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          fontSize: '16px',
                          color: 'var(--color-deep-blue)',
                          lineHeight: 1.65,
                        }}
                      >
                        {sec.listItems.map((li, lIdx) => (
                          <li key={lIdx}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* 7. Блок записи (активен до окончания акции) */}
              {article.booking && article.booking.enabled && (
                <NewsBookingActionBlock
                  endsAtIso={article.booking.endsAtIso}
                  promptText={article.booking.promptText}
                  buttonLabel={article.booking.buttonLabel}
                  phoneDisplay={article.booking.phoneDisplay}
                  phoneHref={article.booking.phoneHref}
                  directionsLabel={article.booking.directionsLabel}
                  directionsHref={article.booking.directionsHref}
                />
              )}

              {/* 8. Ссылка «Все новости компании» */}
              <div
                style={{
                  marginTop: '38px',
                  paddingTop: '22px',
                  borderTop: '1px solid rgba(23, 50, 77, 0.12)',
                }}
              >
                <Link href="/o-kompanii/novosti/" className="news-back-link">
                  <span aria-hidden="true">←</span>
                  <span>Все новости компании</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .news-article-bc-link {
              color: inherit;
              text-decoration: none;
              transition: color 0.2s ease;
            }
            .news-article-bc-link:hover {
              color: var(--color-primary);
              text-decoration: underline;
            }
            .news-article-bc-link:focus-visible {
              outline: 2px solid var(--color-primary);
              outline-offset: 2px;
            }
            .news-phone-text-link:hover {
              color: var(--color-primary) !important;
              text-decoration: underline !important;
            }
            .news-phone-text-link:focus-visible {
              outline: 2px solid var(--color-primary);
              outline-offset: 3px;
            }
            .news-directions-link {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              min-height: 44px;
              font-size: 14.5px;
              font-weight: 600;
              color: var(--color-primary);
              text-decoration: underline;
              text-underline-offset: 3px;
              transition: color 0.2s ease;
            }
            .news-directions-link:hover {
              color: var(--color-deep-blue);
            }
            .news-directions-link:focus-visible {
              outline: 2px solid var(--color-primary);
              outline-offset: 3px;
            }
            .news-back-link {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              min-height: 44px;
              font-size: 15px;
              font-weight: 600;
              color: var(--color-primary);
              text-decoration: none;
              transition: color 0.2s ease;
            }
            .news-back-link:hover {
              color: var(--color-deep-blue);
              text-decoration: underline;
            }
            .news-back-link:focus-visible {
              outline: 2px solid var(--color-primary);
              outline-offset: 3px;
            }
            @media (max-width: 480px) {
              .news-call-btn {
                width: 100%;
              }
            }
          `,
        }}
      />
    </>
  );
}
