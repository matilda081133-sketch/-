import { Metadata } from 'next';
import YuridicheskoeOformlenieClient from './YuridicheskoeOformlenieClient';

export const metadata: Metadata = {
  title: 'Оформление иностранных работников в Липецке | Де-Юре',
  description:
    'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Оформление иностранных работников в Липецке | Де-Юре',
    description:
      'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Юридическое оформление иностранных работников в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оформление иностранных работников в Липецке | Де-Юре',
    description:
      'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical:
      'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/',
  },
};

export default function YuridicheskoeOformleniePage() {
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
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/#breadcrumbs',
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
            name: 'Юридическое оформление иностранных работников',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/#service',
        name: 'Юридическое оформление иностранных работников в Липецке',
        description:
          'Юридическое оформление иностранных работников в Липецке: проверка статуса и документов, договоры, уведомления МВД, приём и увольнение.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/',
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
      <YuridicheskoeOformlenieClient />
    </>
  );
}
