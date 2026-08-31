import { Metadata } from 'next';
import OtkazAnnulirovanieRvpVnzhClient from './OtkazAnnulirovanieRvpVnzhClient';

export const metadata: Metadata = {
  title: 'Обжалование отказа и аннулирования РВП / ВНЖ в Липецке — адвокат | Де-Юре',
  description: 'Помощь при отказе в выдаче или аннулировании РВП и вида на жительство (ВНЖ) в Липецке. 15 дней на выезд. Судебная защита и сохранение законного статуса.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/',
  },
  openGraph: {
    title: 'Обжалование отказа или аннулирования РВП и ВНЖ в Липецке | Де-Юре',
    description: 'Помощь при отказе в выдаче или аннулировании РВП и вида на жительство (ВНЖ) в Липецке. 15 дней на выезд. Судебная защита и сохранение законного статуса.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  ,
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
    'name': 'ЮК «Де-Юре» — Обжалование отказа или аннулирования РВП и ВНЖ',
    'description': 'Помощь при отказе в выдаче или аннулировании РВП и вида на жительство (ВНЖ) в Липецке. 15 дней на выезд. Судебная защита и сохранение законного статуса.',
    'url': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/',
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
        'name': 'Обжалование отказа или аннулирования РВП и ВНЖ',
        'item': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/otkaz-annulirovanie-rvp-vnzh/'
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
      <OtkazAnnulirovanieRvpVnzhClient />
    </>
  );
}
