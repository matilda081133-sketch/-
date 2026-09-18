import { Metadata } from 'next';
import YuristPriProverkeMvdClient from './YuristPriProverkeMvdClient';

export const metadata: Metadata = {
  title: 'Юрист при миграционной проверке МВД в Липецке | Де-Юре',
  description:
    'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юрист при миграционной проверке МВД в Липецке | Де-Юре',
    description:
      'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Юрист при миграционной проверке МВД в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Юрист при миграционной проверке МВД в Липецке | Де-Юре',
    description:
      'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical:
      'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
  },
};

export default function YuristPriProverkeMvdPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/#breadcrumbs',
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
            name: 'Миграционное сопровождение бизнеса',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Юрист при миграционной проверке МВД',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/#service',
        name: 'Юрист при миграционной проверке МВД в Липецке',
        description:
          'Юрист при миграционной проверке МВД в Липецке: анализ требований, подготовка документов и пояснений, сопровождение проверки работодателя.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
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
      <YuristPriProverkeMvdClient />
    </>
  );
}
