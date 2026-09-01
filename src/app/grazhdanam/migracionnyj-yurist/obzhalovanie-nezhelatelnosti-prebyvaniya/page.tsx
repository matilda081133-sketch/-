import { Metadata } from 'next';
import ObzhalovanieNezhelatelnostiPrebyvaniyaClient from './ObzhalovanieNezhelatelnostiPrebyvaniyaClient';

export const metadata: Metadata = {
  title: 'Обжалование решения о нежелательности пребывания в Липецке — адвокат | Де-Юре',
  description: 'Отмена решений о нежелательности пребывания в РФ (ст. 25.10 114-ФЗ), вынесенных Минюстом, МВД, ФСБ, Роспотребнадзором. Судебное признание незаконным и открытие въезда.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/',
  },
  openGraph: {
    title: 'Обжалование нежелательности пребывания в Липецке | Де-Юре',
    description: 'Отмена решений о нежелательности пребывания в РФ (ст. 25.10 114-ФЗ), вынесенных Минюстом, МВД, ФСБ, Роспотребнадзором. Судебное признание незаконным и открытие въезда.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Миграционный юрист в Липецке — ЮК «Де-Юре»',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'ЮК «Де-Юре» — Обжалование нежелательности пребывания',
    'description': 'Отмена решений о нежелательности пребывания в РФ (ст. 25.10 114-ФЗ), вынесенных Минюстом, МВД, ФСБ, Роспотребнадзором. Судебное признание незаконным и открытие въезда.',
    'url': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/',
    'telephone': '+7 (910) 350-31-11',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'ул. Советская, 35',
      'addressLocality': 'Липецк',
      'addressRegion': 'Липецкая область',
            'addressCountry': 'RU'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 52.6038,
      'longitude': 39.5712
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '18:00'
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Главная',
        'item': 'https://dejure-help.ru/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Гражданам',
        'item': 'https://dejure-help.ru/grazhdanam/'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Миграционный юрист',
        'item': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Обжалование нежелательности пребывания',
        'item': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-nezhelatelnosti-prebyvaniya/'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ObzhalovanieNezhelatelnostiPrebyvaniyaClient />
    </>
  );
}
