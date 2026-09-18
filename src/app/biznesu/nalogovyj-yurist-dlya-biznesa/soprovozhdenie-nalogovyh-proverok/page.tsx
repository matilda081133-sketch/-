import { Metadata } from 'next';
import SoprovozhdenieProverokClient from './SoprovozhdenieProverokClient';

export const metadata: Metadata = {
  title: 'Сопровождение налоговых проверок в Липецке — юрист | Де-Юре',
  description:
    'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Сопровождение налоговых проверок в Липецке — юрист | Де-Юре',
    description:
      'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов.',
    url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/soprovozhdenie-nalogovyh-proverok-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Сопровождение налоговых проверок в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Сопровождение налоговых проверок в Липецке — юрист | Де-Юре',
    description:
      'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов.',
    images: ['https://dejure-help.ru/images/og/soprovozhdenie-nalogovyh-proverok-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/',
  },
};

export default function SoprovozhdenieProverokPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/#breadcrumbs',
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
            name: 'Налоговый юрист для бизнеса',
            item: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Сопровождение налоговых проверок',
            item: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/#service',
        name: 'Сопровождение налоговых проверок в Липецке',
        description:
          'Сопровождение камеральных и выездных налоговых проверок в Липецке: анализ требований ФНС, подготовка ответов и возражений, участие при рассмотрении материалов.',
        url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/',
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
      <SoprovozhdenieProverokClient />
    </>
  );
}
