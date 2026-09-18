import { Metadata } from 'next';
import Razblokirovka115fzClient from './Razblokirovka115fzClient';

export const metadata: Metadata = {
  title: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке | Де-Юре',
  description:
    'Юридическая помощь бизнесу при ограничениях по 115-ФЗ: ответ банку, документы, обжалование отказа, обращение в МВК и защита в суде.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке | Де-Юре',
    description:
      'Юридическая помощь бизнесу при ограничениях по 115-ФЗ: ответ банку, документы, обжалование отказа, обращение в МВК и защита в суде.',
    url: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/razblokirovka-raschetnogo-scheta-po-115-fz-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке | Де-Юре',
    description:
      'Юридическая помощь бизнесу при ограничениях по 115-ФЗ: ответ банку, документы, обжалование отказа, обращение в МВК и защита в суде.',
    images: ['https://dejure-help.ru/images/og/razblokirovka-raschetnogo-scheta-po-115-fz-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
  },
};

export default function Razblokirovka115fzPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'Юридическая компания «Де-Юре»',
        url: 'https://dejure-help.ru/',
        telephone: '+7 (4742) 20-15-25',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Бизнесу',
            item: 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Разблокировка расчётного счёта по 115-ФЗ',
            item: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/#service',
        name: 'Разблокировка расчётного счёта по 115-ФЗ в Липецке',
        description:
          'Юридическая помощь бизнесу при ограничениях по 115-ФЗ: ответ банку, документы, обжалование отказа, обращение в МВК и защита в суде.',
        url: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Razblokirovka115fzClient />
    </>
  );
}
