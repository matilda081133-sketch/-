import { Metadata } from 'next';
import ObzhalovanieResheniyaODeportaciiClient from './ObzhalovanieResheniyaODeportaciiClient';

export const metadata: Metadata = {
  title: 'Обжалование решения о депортации в Липецке — защита от принудительной высылки | Де-Юре',
  description: 'Юридическая помощь при вынесении решения о депортации иностранного гражданина (115-ФЗ). Подача административного иска, меры предварительной защиты, отмена высылки.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/',
  },
  openGraph: {
    title: 'Обжалование решения о депортации в Липецке | Де-Юре',
    description: 'Юридическая помощь при вынесении решения о депортации иностранного гражданина (115-ФЗ). Подача административного иска, меры предварительной защиты, отмена высылки.',
    url: 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    'name': 'ЮК «Де-Юре» — Обжалование решения о депортации',
    'description': 'Юридическая помощь при вынесении решения о депортации иностранного гражданина (115-ФЗ). Подача административного иска, меры предварительной защиты, отмена высылки.',
    'url': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/',
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
        'name': 'Обжалование решения о депортации',
        'item': 'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/obzhalovanie-resheniya-o-deportacii/'
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
      <ObzhalovanieResheniyaODeportaciiClient />
    </>
  );
}
