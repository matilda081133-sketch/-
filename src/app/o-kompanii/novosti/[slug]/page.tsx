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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const params: { slug: string }[] = [];

  for (const item of newsItems) {
    if (item.status === 'published') {
      // Публичный URL опубликованной новости
      params.push({ slug: item.slug });
    } else {
      // Закрытый предпросмотр черновика (публичный URL /o-kompanii/novosti/{slug}/ не создаётся и отдаёт 404)
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
  const ogImages = article.coverImage
    ? [
        {
          url: `https://dejure-help.ru${article.coverImage}`,
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
      title: article.title,
      description: article.excerpt || article.lead,
      url: canonicalUrl,
      siteName: 'Юридическая компания «Де‑Юре»',
      locale: 'ru_RU',
      type: 'article',
      publishedTime: article.publishedAt,
      images: ogImages,
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
  const p = article.participation;
  const showParticipation = Boolean(p && p.enabled);

  const jsonLdArticle: Record<string, unknown> = {
    '@type': 'Article',
    headline: article.title,
    description: article.lead,
    datePublished: article.publishedAt,
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

  if (article.coverImage) {
    jsonLdArticle.image = [`https://dejure-help.ru${article.coverImage}`];
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
            name: article.title,
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
              <strong>Черновик (закрытый предпросмотр).</strong> Страница закрыта от индексации и не отображается в публичном разделе новостей и sitemap.xml.
            </div>
          </div>
        )}

        <article
          style={{
            padding: 'clamp(32px, 5vw, 56px) 0 clamp(56px, 7vw, 88px)',
          }}
        >
          <div className="container">
            {/* Хлебные крошки */}
            <nav aria-label="Хлебные крошки" style={{ marginBottom: '28px' }}>
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
                  {article.title}
                </li>
              </ol>
            </nav>

            {/* Читаемая колонка до 760 px */}
            <div style={{ maxWidth: '760px' }}>
              {/* 1. H1 */}
              <h1
                style={{
                  fontSize: 'clamp(26px, 4vw, 40px)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.24,
                  margin: '0 0 16px 0',
                  fontWeight: 600,
                  overflowWrap: 'break-word',
                  hyphens: 'auto',
                }}
              >
                {article.title}
              </h1>

              {/* 2. Дата публикации */}
              <time
                dateTime={article.publishedAt}
                style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-gold-text, #80633F)',
                  marginBottom: '22px',
                  letterSpacing: '0.02em',
                }}
              >
                {formatNewsDateRu(article.publishedAt)}
              </time>

              {/* 3. Лид */}
              <p
                style={{
                  fontSize: 'clamp(17px, 2vw, 20px)',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.58,
                  fontWeight: 500,
                  margin: '0 0 28px 0',
                }}
              >
                {article.lead}
              </p>

              {/* 4. Опциональная обложка (масштабируется без обрезки текста) */}
              {article.coverImage && (
                <figure
                  style={{
                    margin: '0 0 32px 0',
                    width: '100%',
                    border: '1px solid rgba(23, 50, 77, 0.12)',
                    background: 'var(--color-deep-blue)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={article.coverImage}
                    alt={article.coverAlt || article.title}
                    width={1200}
                    height={630}
                    decoding="async"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    }}
                  />
                </figure>
              )}

              {/* 5. Основной текст с подзаголовками по необходимости */}
              <div className="news-article-body">
                {article.sections.map((sec, idx) => (
                  <section
                    key={idx}
                    style={{ marginTop: idx === 0 ? 0 : '32px' }}
                  >
                    {sec.subheading && (
                      <h2
                        style={{
                          fontSize: 'clamp(21px, 2.5vw, 26px)',
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

                    {sec.paragraphs.map((pText, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          fontSize: '16px',
                          color: 'var(--color-deep-blue)',
                          lineHeight: 1.72,
                          margin: '0 0 16px 0',
                        }}
                      >
                        {pText}
                      </p>
                    ))}

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

              {/* Необязательный блок «Как принять участие» (при отключении пустого места нет) */}
              {showParticipation && p && (
                <aside
                  aria-label={p.heading || 'Как принять участие'}
                  style={{
                    marginTop: '36px',
                    padding: 'clamp(22px, 3.5vw, 32px)',
                    background: 'var(--color-cream)',
                    border: '1px solid rgba(23, 50, 77, 0.12)',
                    borderLeft: '4px solid var(--color-primary)',
                  }}
                >
                  <h2
                    style={{
                      fontSize: 'clamp(20px, 2.4vw, 24px)',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-deep-blue)',
                      margin: '0 0 18px 0',
                      lineHeight: 1.3,
                      fontWeight: 600,
                    }}
                  >
                    {p.heading || 'Как принять участие'}
                  </h2>

                  <dl
                    style={{
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    {p.time && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">Время:</dt>
                        <dd className="news-participation-dd">{p.time}</dd>
                      </div>
                    )}
                    {p.addressOrFormat && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">Адрес / формат:</dt>
                        <dd className="news-participation-dd">
                          {p.addressOrFormat}
                        </dd>
                      </div>
                    )}
                    {p.organizerOrVenue && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">Площадка:</dt>
                        <dd className="news-participation-dd">
                          {p.organizerOrVenue}
                        </dd>
                      </div>
                    )}
                    {p.specialist && p.specialist.name && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">Специалист:</dt>
                        <dd className="news-participation-dd">
                          {p.specialist.name}
                          {p.specialist.status ? ` — ${p.specialist.status}` : ''}
                        </dd>
                      </div>
                    )}
                    {p.audience && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">Кому доступно:</dt>
                        <dd className="news-participation-dd">{p.audience}</dd>
                      </div>
                    )}
                    {p.freeHelpScope && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">Объём помощи:</dt>
                        <dd className="news-participation-dd">
                          {p.freeHelpScope}
                        </dd>
                      </div>
                    )}
                    {p.conditions && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">Способ записи:</dt>
                        <dd className="news-participation-dd">{p.conditions}</dd>
                      </div>
                    )}
                    {p.whatToBring && (
                      <div className="news-participation-row">
                        <dt className="news-participation-dt">
                          Что взять с собой:
                        </dt>
                        <dd className="news-participation-dd">
                          {p.whatToBring}
                        </dd>
                      </div>
                    )}
                  </dl>

                  {/* Показывать кнопку или телефон ТОЛЬКО при подтверждённом канале записи */}
                  {p.bookingContact && p.bookingContact.confirmed && (
                    <div style={{ marginTop: '22px' }}>
                      {p.bookingContact.type === 'phone' ? (
                        <a
                          href={p.bookingContact.href}
                          className="btn btn-primary"
                          style={{
                            padding: '13px 24px',
                            fontSize: '15px',
                            borderRadius: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                          }}
                        >
                          <span>{p.bookingContact.label}:</span>
                          <strong>{p.bookingContact.value}</strong>
                        </a>
                      ) : (
                        <a
                          href={p.bookingContact.href}
                          className="btn btn-primary"
                          style={{
                            padding: '13px 24px',
                            fontSize: '15px',
                            borderRadius: 0,
                            display: 'inline-block',
                            textDecoration: 'none',
                          }}
                        >
                          {p.bookingContact.label}
                        </a>
                      )}
                    </div>
                  )}
                </aside>
              )}

              {/* 6. Ссылка «Все новости компании» */}
              <div
                style={{
                  marginTop: '40px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(23, 50, 77, 0.12)',
                }}
              >
                <Link
                  href="/o-kompanii/novosti/"
                  className="news-back-link"
                >
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
            .news-participation-row {
              display: grid;
              grid-template-columns: 165px minmax(0, 1fr);
              gap: 12px;
              font-size: 15px;
              line-height: 1.55;
            }
            .news-participation-dt {
              font-weight: 600;
              color: var(--color-deep-blue);
              margin: 0;
            }
            .news-participation-dd {
              margin: 0;
              color: var(--color-deep-blue);
            }
            .news-back-link {
              display: inline-flex;
              align-items: center;
              gap: 8px;
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
            @media (max-width: 640px) {
              .news-participation-row {
                grid-template-columns: 1fr;
                gap: 2px;
              }
            }
          `,
        }}
      />
    </>
  );
}
