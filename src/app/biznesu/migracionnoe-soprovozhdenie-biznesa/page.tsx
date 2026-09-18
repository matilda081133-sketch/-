import { Metadata } from 'next';
import MigracionnoeSoprovozhdenieClient from './MigracionnoeSoprovozhdenieClient';

export const metadata: Metadata = {
  title: 'Миграционное сопровождение бизнеса в Липецке | Де-Юре',
  description:
    'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Миграционное сопровождение бизнеса в Липецке | Де-Юре',
    description:
      'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Миграционное сопровождение бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Миграционное сопровождение бизнеса в Липецке | Де-Юре',
    description:
      'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/',
  },
};

export default function MigracionnoeSoprovozhdeniePage() {
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
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/#breadcrumbs',
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
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/#service',
        name: 'Миграционное сопровождение бизнеса в Липецке',
        description:
          'Миграционное сопровождение бизнеса в Липецке: оформление иностранных работников, аудит, помощь при проверках МВД и защита по ст. 18.15 КоАП РФ.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/',
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
      <MigracionnoeSoprovozhdenieClient />
    </>
  );
}
