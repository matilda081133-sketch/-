import { Metadata } from 'next';
import MigracionnyjAuditClient from './MigracionnyjAuditClient';

export const metadata: Metadata = {
  title: 'Миграционный аудит работодателя в Липецке | Де-Юре',
  description:
    'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Миграционный аудит работодателя в Липецке | Де-Юре',
    description:
      'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Миграционный аудит работодателя в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Миграционный аудит работодателя в Липецке | Де-Юре',
    description:
      'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical:
      'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/',
  },
};

export default function MigracionnyjAuditPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/#breadcrumbs',
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
            name: 'Миграционный аудит работодателя',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/#service',
        name: 'Миграционный аудит работодателя в Липецке',
        description:
          'Миграционный аудит работодателя в Липецке: проверка иностранных работников, договоров, уведомлений МВД, сроков и внутренних процессов компании.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/',
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
      <MigracionnyjAuditClient />
    </>
  );
}
