import { Metadata } from 'next';
import MigracionnyjClient from './MigracionnyjClient';

export const metadata: Metadata = {
  title: 'Миграционный юрист в Липецке — помощь иностранным гражданам | Де-Юре',
  description: 'Помощь миграционного юриста в Липецке: запрет на въезд, выдворение, депортация, РВП, ВНЖ, гражданство и реестр контролируемых лиц. Оценим документы и порядок действий.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/',
  },
  openGraph: {
    title: 'Миграционный юрист в Липецке | Де-Юре',
    description: 'Юридическая помощь иностранным гражданам: оформление статуса, отмена запрета на въезд, выдворения и депортации. Защита прав в Липецке и дистанционно.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function MigracionnyjPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'Юридическая компания «Де-Юре» — Миграционный юрист в Липецке',
    'description': 'Юридическая помощь иностранным гражданам: отмена запрета на въезд, обжалование выдворения и депортации, РВП, ВНЖ, гражданство, реестр контролируемых лиц.',
    'url': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/',
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
      <MigracionnyjClient />
    </>
  );
}
