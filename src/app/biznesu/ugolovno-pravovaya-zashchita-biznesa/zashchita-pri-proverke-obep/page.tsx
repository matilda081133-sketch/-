import { Metadata } from 'next';
import ZashchitaPriProverkeObepClient from './ZashchitaPriProverkeObepClient';

export const metadata: Metadata = {
  title: 'Защита бизнеса при проверке ОБЭП в Липецке | Де-Юре',
  description:
    'Помогаем бизнесу при проверке ОБЭП: анализируем запросы, готовим документы, руководителей и сотрудников, координируем защиту. Липецк и область.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита бизнеса при проверке ОБЭП | Де-Юре',
    description:
      'Оценим запрос и стадию проверки, подготовим позицию компании и организуем помощь руководителям и сотрудникам.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-pri-proverke-obep-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита бизнеса при проверке ОБЭП в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита бизнеса при проверке ОБЭП в Липецке | Де-Юре',
    description:
      'Помогаем бизнесу при проверке ОБЭП: анализируем запросы, готовим документы, руководителей и сотрудников, координируем защиту. Липецк и область.',
    images: ['https://dejure-help.ru/images/og/zashchita-pri-proverke-obep-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/',
  },
};

export default function ZashchitaPriProverkeObepPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/#breadcrumbs',
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
            name: 'Защита при проверке ОБЭП',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/#service',
        name: 'Защита бизнеса при проверке ОБЭП в Липецке',
        description:
          'Помогаем бизнесу при проверке ОБЭП: анализируем запросы, готовим документы, руководителей и сотрудников, координируем защиту. Липецк и область.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/',
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
      <ZashchitaPriProverkeObepClient />
    </>
  );
}
