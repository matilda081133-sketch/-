import type { Metadata } from 'next';
import Link from 'next/link';
import { PRICING_DIRECTIONS } from '@/data/pricingData';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Стоимость юридических услуг в Липецке — цены | Де-Юре',
  description: 'Цены на юридические услуги для граждан и бизнеса в Липецке. Консультации, документы и представительство. Объём работ и расчёт стоимости вашей задачи.',
  alternates: {
    canonical: 'https://dejure-help.ru/stoimost/',
  },
  openGraph: {
    title: 'Стоимость юридических услуг в Липецке — цены | Де-Юре',
    description: 'Цены на юридические услуги для граждан и бизнеса в Липецке. Консультации, документы и представительство. Объём работ и расчёт стоимости вашей задачи.',
    url: 'https://dejure-help.ru/stoimost/',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/bobkin.webp',
        width: 800,
        height: 1000,
        alt: 'Юридическая компания «Де-Юре» в Липецке',
      },
    ],
  },
};

export default function PricingPage() {
  // Generate Schema.org JSON-LD per TZ section 7:
  // "JSON-LD: WebPage, BreadcrumbList и OfferCatalog с группами направлений и услугами Service/Offer.
  // Ссылаться на существующий @id организации; не создавать второго юрлица.
  // Для услуг независимого адвоката не назначать ЮК исполнителем адвокатской помощи:
  // использовать каталог со ссылкой на профильное направление, без ложного provider и числового Offer от ЮК.
  // Условия и суммы при этом остаются в видимом прайсе.
  // Фиксированная ставка: Offer.price и priceCurrency RUB.
  // Ставка «от»: Offer.priceSpecification типа PriceSpecification с minPrice и priceCurrency RUB; не заполнять Offer.price как фиксированную сумму.
  // Для «По индивидуальному расчёту» не передавать price=0 или придуманное число."

  const directionCatalogs = PRICING_DIRECTIONS.map((dir) => {
    const isAdvocateDirection = dir.anchor === 'advokat-po-ugolovnym-delam' || dir.anchor === 'ugolovno-pravovaya-zashchita-biznesa';

    const servicesElements = dir.services.map((svc) => {
      if (isAdvocateDirection) {
        // Independent advocate: Service without false provider and without numeric Offer from company
        return {
          '@type': 'Service',
          'name': svc.name,
          'description': svc.scope,
          'url': `https://dejure-help.ru/stoimost/#${dir.anchor}`,
        };
      }

      const serviceObj: any = {
        '@type': 'Service',
        'name': svc.name,
        'description': svc.scope,
        'provider': {
          '@id': 'https://dejure-help.ru/#organization',
        },
      };

      if (svc.priceType === 'exact' && svc.amount) {
        serviceObj.offers = {
          '@type': 'Offer',
          'price': svc.amount,
          'priceCurrency': 'RUB',
          'url': `https://dejure-help.ru/stoimost/#${dir.anchor}`,
          'description': svc.scope,
        };
      } else if (svc.priceType === 'from' && svc.amount) {
        serviceObj.offers = {
          '@type': 'Offer',
          'priceSpecification': {
            '@type': 'PriceSpecification',
            'minPrice': svc.amount,
            'priceCurrency': 'RUB',
          },
          'url': `https://dejure-help.ru/stoimost/#${dir.anchor}`,
          'description': svc.scope,
        };
      }
      // For 'custom' (По индивидуальному расчёту), no offer with 0 is emitted per TZ

      return serviceObj;
    });

    return {
      '@type': 'OfferCatalog',
      'name': dir.title,
      'url': `https://dejure-help.ru/stoimost/#${dir.anchor}`,
      'itemListElement': servicesElements,
    };
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/stoimost/#webpage',
        'url': 'https://dejure-help.ru/stoimost/',
        'name': 'Стоимость юридических услуг в Липецке — цены | Де-Юре',
        'description': 'Цены на юридические услуги для граждан и бизнеса в Липецке. Консультации, документы и представительство. Объём работ и расчёт стоимости вашей задачи.',
        'isPartOf': {
          '@id': 'https://dejure-help.ru/#website',
        },
        'breadcrumb': {
          '@id': 'https://dejure-help.ru/stoimost/#breadcrumb',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/stoimost/#breadcrumb',
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
            'name': 'Стоимость',
            'item': 'https://dejure-help.ru/stoimost/',
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        'name': 'Стоимость юридических услуг ЮК «Де-Юре» в Липецке',
        'description': 'Прейскурант цен на юридические услуги гражданам и бизнесу в Липецке',
        'numberOfItems': PRICING_DIRECTIONS.length,
        'itemListElement': directionCatalogs,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Хлебные крошки */}
      <div style={{ background: '#F8F9FA', borderBottom: '1px solid rgba(16, 39, 59, 0.06)', padding: '14px 0' }}>
        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <nav aria-label="Хлебные крошки" style={{ fontSize: '14px', color: '#718096' }}>
            <Link href="/" style={{ color: '#10273B', textDecoration: 'none' }}>
              Главная
            </Link>
            <span style={{ margin: '0 8px', color: '#A0AEC0' }}>/</span>
            <span style={{ color: '#718096' }}>Стоимость</span>
          </nav>
        </div>
      </div>

      <PricingPageClient />
    </>
  );
}
