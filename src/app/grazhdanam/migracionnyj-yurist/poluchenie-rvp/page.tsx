import { Metadata } from 'next';
import PoluchenieRvpClient from './PoluchenieRvpClient';

export const metadata: Metadata = {
  title: 'Помощь в получении РВП в Липецке — оформление по квоте и без квоты | Де-Юре',
  description: 'Юридическое сопровождение получения разрешения на временное проживание (РВП) в Липецке. Основания по браку, рождению, учёбе, квоте. Проверка документов и защита от отказа.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-rvp/',
  },
  openGraph: {
    title: 'Помощь в получении РВП в Липецке | Де-Юре',
    description: 'Юридическое сопровождение получения разрешения на временное проживание (РВП) в Липецке. Основания по браку, рождению, учёбе, квоте. Проверка документов и защита от отказа.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-rvp/',
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
    'name': 'ЮК «Де-Юре» — Помощь в получении РВП',
    'description': 'Юридическое сопровождение получения разрешения на временное проживание (РВП) в Липецке. Основания по браку, рождению, учёбе, квоте. Проверка документов и защита от отказа.',
    'url': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-rvp/',
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
        'name': 'Помощь в получении РВП',
        'item': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-rvp/'
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
      <PoluchenieRvpClient />
    </>
  );
}
