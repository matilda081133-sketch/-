import { Metadata } from 'next';
import PoluchenieGrazhdanstvaRfClient from './PoluchenieGrazhdanstvaRfClient';

export const metadata: Metadata = {
  title: 'Помощь в получении гражданства РФ в Липецке — адвокат по 138-ФЗ | Де-Юре',
  description: 'Юридическое сопровождение получения гражданства РФ в Липецке по новому закону № 138-ФЗ. Оценка права, сбор документов, проверка анкеты, сопровождение приёма в гражданство.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-grazhdanstva-rf/',
  },
  openGraph: {
    title: 'Помощь в получении гражданства РФ в Липецке | Де-Юре',
    description: 'Юридическое сопровождение получения гражданства РФ в Липецке по новому закону № 138-ФЗ. Оценка права, сбор документов, проверка анкеты, сопровождение приёма в гражданство.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-grazhdanstva-rf/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'ЮК «Де-Юре» — Помощь в получении гражданства РФ',
    'description': 'Юридическое сопровождение получения гражданства РФ в Липецке по новому закону № 138-ФЗ. Оценка права, сбор документов, проверка анкеты, сопровождение приёма в гражданство.',
    'url': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-grazhdanstva-rf/',
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
        'name': 'Помощь в получении гражданства РФ',
        'item': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/poluchenie-grazhdanstva-rf/'
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
      <PoluchenieGrazhdanstvaRfClient />
    </>
  );
}
