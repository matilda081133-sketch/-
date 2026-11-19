import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_HREF,
  SITE_OFFICE_ADDRESS,
  CONTACTS_PAGE_HREF,
} from '@/lib/contacts';

export interface NewsScheduleRow {
  label?: string;
  value: string;
}

export interface NewsSection {
  subheading?: string;
  paragraphs?: string[];
  scheduleRows?: NewsScheduleRow[];
  listItems?: string[];
}

export interface NewsEventBooking {
  enabled: boolean;
  promptText: string;
  buttonLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  directionsLabel?: string;
  directionsHref?: string;
  /** Момент окончания мероприятия с часовым поясом (например, 2026-11-20T15:00:00+03:00) */
  endsAtIso?: string;
  /** Текст над основным текстом после завершения приёма */
  archiveNoticeText?: string;
  /** Пометка в карточке списка после завершения мероприятия */
  archiveCardBadgeText?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  status: 'draft' | 'published';
  /** Заголовок H1 на странице новости */
  title: string;
  /** Короткий заголовок для карточки в списке новостей (если отличается от H1) */
  cardTitle?: string;
  /** Короткое название последнего пункта в хлебных крошках */
  breadcrumbTitle?: string;
  /** Фактическая дата выхода новости с часовым поясом (ISO 8601) */
  publishedAt: string;
  /** Фактическая дата последнего изменения с часовым поясом (ISO 8601) */
  modifiedAt: string;
  /** Вступление (лид) на странице новости */
  lead: string;
  /** Короткий анонс для карточки в разделе «Новости компании» */
  excerpt: string;
  /** WebP-обложка 1200×630 для вёрстки */
  coverImage?: string;
  /** Совместимый JPG 1200×630 для Open Graph */
  ogImage?: string;
  coverAlt?: string;
  sections: NewsSection[];
  booking?: NewsEventBooking;
  seo: {
    title: string;
    description: string;
  };
  /** Служебные пометки редактора — не выводятся в публичную вёрстку */
  internalNotes?: string;
}

const MONTHS_GENITIVE = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export function formatNewsDateRu(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate);
  if (!match) return isoDate;
  const year = Number(match[1]);
  const monthIdx = Number(match[2]) - 1;
  const day = Number(match[3]);
  const monthName = MONTHS_GENITIVE[monthIdx] || '';
  return `${day} ${monthName} ${year} года`;
}

export const newsItems: NewsItem[] = [
  {
    id: 'den-pravovoy-pomoshchi-detyam-2026',
    slug: 'den-pravovoy-pomoshchi-detyam-2026',
    status: 'published',
    title: '«Де‑Юре» проведёт бесплатные консультации в День правовой помощи детям',
    cardTitle: 'Бесплатные консультации в День правовой помощи детям',
    breadcrumbTitle: 'День правовой помощи детям',
    publishedAt: '2026-11-19T12:30:00+03:00',
    modifiedAt: '2026-11-19T12:30:00+03:00',
    lead: '20 ноября 2026 года с 10:00 до 15:00 сотрудники юридической компании «Де‑Юре» проведут бесплатные консультации в рамках Всероссийского дня правовой помощи детям.',
    excerpt:
      '20 ноября с 10:00 до 15:00 — консультационная помощь в офисе «Де‑Юре» в Липецке. Приём по предварительной записи.',
    coverImage: '/images/news/den-pravovoy-pomoshchi-detyam-2026.webp',
    ogImage: '/images/news/den-pravovoy-pomoshchi-detyam-2026.jpg',
    coverAlt:
      'День правовой помощи детям — бесплатные консультации в Де‑Юре 20 ноября 2026 года',
    sections: [
      {
        subheading: 'Кому доступна помощь',
        paragraphs: [
          'Получить бесплатную консультационную помощь смогут дети-сироты, дети, оставшиеся без попечения родителей, дети, находящиеся в трудной жизненной ситуации, и их законные представители.',
          'Сотрудники «Де‑Юре» ответят на интересующие посетителей правовые вопросы в пределах своей компетенции. Бесплатная помощь в рамках акции предоставляется в форме консультации.',
        ],
      },
      {
        subheading: 'Где и когда пройдут консультации',
        scheduleRows: [
          { label: 'Дата:', value: '20 ноября 2026 года.' },
          { label: 'Время:', value: 'с 10:00 до 15:00.' },
          { label: 'Адрес:', value: `${SITE_OFFICE_ADDRESS}.` },
          { value: 'Приём проводится по предварительной записи.' },
        ],
      },
    ],
    booking: {
      enabled: true,
      promptText:
        'Чтобы записаться на бесплатную консультацию в рамках акции, позвоните нам и сообщите, что обращаетесь по поводу Дня правовой помощи детям.',
      buttonLabel: 'Позвонить и записаться',
      phoneDisplay: SITE_PHONE_DISPLAY,
      phoneHref: SITE_PHONE_HREF,
      directionsLabel: 'Как добраться',
      directionsHref: CONTACTS_PAGE_HREF,
      endsAtIso: '2026-11-20T15:00:00+03:00',
      archiveNoticeText: 'Приём в рамках акции 20 ноября 2026 года завершён',
      archiveCardBadgeText: 'Мероприятие завершено',
    },
    seo: {
      title: 'Бесплатные консультации 20 ноября 2026 в Липецке | Де‑Юре',
      description:
        '20 ноября 2026 года с 10:00 до 15:00 «Де‑Юре» проведёт бесплатные консультации в День правовой помощи детям. Липецк, Советская, 35. По записи.',
    },
  },
];

/**
 * Возвращает опубликованные новости от новых к старым по дате публикации.
 */
export function getPublishedNews(): NewsItem[] {
  return newsItems
    .filter((item) => item.status === 'published')
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getPublishedNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug && item.status === 'published');
}

export const PREVIEW_SLUG_PREFIX = 'preview-';

export function getDraftByPreviewSlug(paramSlug: string): NewsItem | undefined {
  if (!paramSlug.startsWith(PREVIEW_SLUG_PREFIX)) return undefined;
  const realSlug = paramSlug.slice(PREVIEW_SLUG_PREFIX.length);
  return newsItems.find((item) => item.slug === realSlug && item.status === 'draft');
}

export function hasPublishedNews(): boolean {
  return newsItems.some((item) => item.status === 'published');
}
