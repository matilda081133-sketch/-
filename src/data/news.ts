export interface NewsSpecialistInfo {
  name: string;
  status: string; // Для независимого адвоката — фактический статус (напр. «Адвокат, рег. № ...»), без указания работы в штате ЮК
  isIndependentAdvocate?: boolean;
}

export interface NewsBookingContact {
  confirmed: boolean; // Показывать кнопку или телефон только при подтверждённом канале записи
  type: 'phone' | 'button';
  label: string;
  value: string;
  href: string;
}

export interface NewsParticipation {
  enabled: boolean;
  heading?: string; // По умолчанию «Как принять участие»
  time?: string; // Время проведения
  addressOrFormat?: string; // Адрес или формат
  organizerOrVenue?: string; // Организатор или площадка
  companyFormatAndRole?: string; // Формат и роль компании
  specialist?: NewsSpecialistInfo; // Имя и статус специалиста
  audience?: string; // Кому доступно / аудитория
  topics?: string[]; // Темы консультирования
  freeHelpScope?: string; // Объём бесплатной помощи
  conditions?: string; // Условия участия / способ записи
  whatToBring?: string; // Что взять с собой
  bookingContact?: NewsBookingContact; // Подтверждённый канал записи
}

export interface NewsSection {
  subheading?: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface NewsItem {
  id: string;
  slug: string;
  status: 'draft' | 'published';
  title: string;
  publishedAt: string; // YYYY-MM-DD (фактическая дата публикации новости, отдельно от даты события)
  lead: string; // Лид публикации и короткий анонс в карточке
  excerpt?: string; // Опциональный отдельный короткий анонс для карточки (если не задан — используется lead)
  coverImage?: string;
  coverAlt?: string;
  sections: NewsSection[];
  participation?: NewsParticipation;
  seo: {
    title: string;
    description: string;
  };
  /** Служебные пометки редактора — никогда не выводятся в публичную вёрстку и JSON-LD */
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
    status: 'draft',
    title: '«Де‑Юре» примет участие во Всероссийском дне правовой помощи детям',
    publishedAt: '2026-11-17',
    lead: 'Юридическая компания «Де‑Юре» примет участие во Всероссийском дне правовой помощи детям, который пройдёт 20 ноября 2026 года.',
    excerpt:
      'Юридическая компания «Де‑Юре» примет участие во Всероссийском дне правовой помощи детям, который пройдёт 20 ноября 2026 года.',
    coverImage: '/images/news/den-pravovoy-pomoshchi-detyam-2026.webp',
    coverAlt: 'День правовой помощи детям — 20 ноября 2026',
    sections: [
      {
        paragraphs: [
          'Всероссийский день правовой помощи детям ежегодно проводится 20 ноября и приурочен к принятию Конвенции о правах ребёнка. В этот день профильные организации и практикующие специалисты проводят правовое консультирование по вопросам защиты прав и законных интересов несовершеннолетних.',
          'Участие ЮК «Де‑Юре» направлено на разъяснение родителям, опекунам, попечителям и законным представителям порядка защиты жилищных, имущественных и семейных прав детей в конкретных жизненных ситуациях.',
        ],
      },
      {
        subheading: 'По каким вопросам проводится консультирование',
        paragraphs: [
          'В рамках мероприятия можно разобрать правовую ситуацию, связанную с правами и интересами ребёнка, и получить понятный ориентир по дальнейшим действиям:',
        ],
        listItems: [
          'алиментные обязательства, порядок взыскания и изменения размера алиментов;',
          'определение места жительства ребёнка и порядка общения с родителями;',
          'защита жилищных и наследственных прав несовершеннолетних;',
          'вопросы опеки, попечительства и распоряжения имуществом ребёнка;',
          'меры социальной поддержки семей с детьми и порядок обжалования отказов.',
        ],
      },
    ],
    participation: {
      enabled: false, // Включается после подтверждения открытого формата и канала записи
      heading: 'Как принять участие',
      time: '20 ноября 2026 года (точное время уточняется)',
      addressOrFormat: 'г. Липецк, ул. Советская, д. 35, офис 213 / уточняется формат площадки',
      organizerOrVenue: '',
      companyFormatAndRole: 'Устное правовое консультирование граждан по вопросам защиты прав несовершеннолетних',
      specialist: {
        name: '',
        status: '',
        isIndependentAdvocate: false,
      },
      audience: 'Родители, усыновители, опекуны, попечители, законные представители несовершеннолетних, дети-сироты и дети, оставшиеся без попечения родителей',
      topics: [
        'Семейные и алиментные вопросы',
        'Жилищные и имущественные права детей',
        'Опека, попечительство и социальные гарантии',
      ],
      freeHelpScope: 'Бесплатная устная первичная правовая консультация и разъяснение порядка действий по представленным документам',
      conditions: 'Бесплатно в рамках Всероссийского дня правовой помощи детям по предварительной записи',
      whatToBring: 'Документ, удостоверяющий личность, и копии документов по вопросу (при наличии), чтобы разбор ситуации был предметным',
      bookingContact: {
        confirmed: false, // Показывать телефон или кнопку только при confirmed: true
        type: 'phone',
        label: 'Запись по телефону',
        value: '+7 (4742) 20-15-25',
        href: 'tel:+74742201525',
      },
    },
    seo: {
      title: '«Де‑Юре» примет участие во Всероссийском дне правовой помощи детям — 20 ноября 2026',
      description:
        'Юридическая компания «Де‑Юре» в Липецке примет участие во Всероссийском дне правовой помощи детям 20 ноября 2026 года.',
    },
    internalNotes:
      'ЧЕРНОВИК. До публикации уточнить: открытое мероприятие или закрытая площадка; ФИО и точный статус специалиста (независимого адвоката указывать строго по его статусу без привязки к штату ЮК); точное время, площадку и подтверждённый канал записи. Если дата прошла или формат закрытый — переработать текст в пост-релиз по итогам участия и оставить participation.enabled = false.',
  },
];

/**
 * Возвращает только опубликованные новости от новых к старым по дате публикации.
 */
export function getPublishedNews(): NewsItem[] {
  return newsItems
    .filter((item) => item.status === 'published')
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/**
 * Возвращает опубликованную новость по публичному slug.
 * Черновики по публичному URL не возвращаются (отдают 404).
 */
export function getPublishedNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug && item.status === 'published');
}

export const PREVIEW_SLUG_PREFIX = 'preview-';

/**
 * Закрытый предпросмотр черновиков по служебному префиксу preview-{slug}.
 */
export function getDraftByPreviewSlug(paramSlug: string): NewsItem | undefined {
  if (!paramSlug.startsWith(PREVIEW_SLUG_PREFIX)) return undefined;
  const realSlug = paramSlug.slice(PREVIEW_SLUG_PREFIX.length);
  return newsItems.find((item) => item.slug === realSlug);
}

/**
 * Проверка, есть ли хотя бы одна опубликованная новость (для показа ссылок в «О компании» и подвале).
 */
export function hasPublishedNews(): boolean {
  return newsItems.some((item) => item.status === 'published');
}
