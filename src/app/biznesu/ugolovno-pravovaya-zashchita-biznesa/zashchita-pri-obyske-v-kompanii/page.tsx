import { Metadata } from 'next';
import ZashchitaPriObyskeClient from './ZashchitaPriObyskeClient';

export const metadata: Metadata = {
  title: 'Адвокат при обыске и выемке в компании в Липецке | Де-Юре',
  description:
    'Организуем помощь адвоката при обыске или выемке в компании: документы, техника, сотрудники, протокол и действия после мероприятия. Липецк.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита бизнеса при обыске и выемке | Де-Юре',
    description:
      'Срочная юридическая помощь компании во время обыска или выемки и после завершения мероприятия.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-pri-obyske-v-kompanii-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита при обыске и выемке в компании в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Адвокат при обыске и выемке в компании в Липецке | Де-Юре',
    description:
      'Организуем помощь адвоката при обыске или выемке в компании: документы, техника, сотрудники, протокол и действия после мероприятия. Липецк.',
    images: ['https://dejure-help.ru/images/og/zashchita-pri-obyske-v-kompanii-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/',
  },
};

export default function ZashchitaPriObyskePage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/#breadcrumbs',
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
            name: 'Уголовно-правовая защита бизнеса',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Защита при обыске и выемке',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/#service',
        name: 'Защита при обыске и выемке в компании в Липецке',
        description:
          'Организуем помощь адвоката при обыске или выемке в компании: документы, техника, сотрудники, протокол и действия после мероприятия. Липецк.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/',
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
      <ZashchitaPriObyskeClient />
    </>
  );
}
