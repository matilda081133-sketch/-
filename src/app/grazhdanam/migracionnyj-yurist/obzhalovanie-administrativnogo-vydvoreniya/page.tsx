import { Metadata } from 'next';
import ObzhalovanieAdministrativnogoVydvoreniyaClient from './ObzhalovanieAdministrativnogoVydvoreniyaClient';

export const metadata: Metadata = {
  title: 'Обжалование административного выдворения в Липецке — адвокат по ст. 18.8 КоАП | Де-Юре',
  description: 'Срочное обжалование постановления суда об административном выдворении за пределы РФ (ст. 18.8, 18.10 КоАП). 10 дней на подачу жалобы. Защита от высылки и ЦВСИГ.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/',
  },
  openGraph: {
    title: 'Обжалование административного выдворения в Липецке | Де-Юре',
    description: 'Срочное обжалование постановления суда об административном выдворении за пределы РФ (ст. 18.8, 18.10 КоАП). 10 дней на подачу жалобы. Защита от высылки и ЦВСИГ.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/',
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
    'name': 'ЮК «Де-Юре» — Обжалование административного выдворения',
    'description': 'Срочное обжалование постановления суда об административном выдворении за пределы РФ (ст. 18.8, 18.10 КоАП). 10 дней на подачу жалобы. Защита от высылки и ЦВСИГ.',
    'url': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/',
    'telephone': '+7 (910) 350-31-11',
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'ул. Советская, 35',
      'addressLocality': 'Липецк',
      'addressRegion': 'Липецкая область',
      'postalCode': '398001',
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
        'name': 'Обжалование административного выдворения',
        'item': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-administrativnogo-vydvoreniya/'
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
      <ObzhalovanieAdministrativnogoVydvoreniyaClient />
    </>
  );
}
