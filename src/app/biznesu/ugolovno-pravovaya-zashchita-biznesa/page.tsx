import { Metadata } from 'next';
import UgolovnoPravovayaZashchitaClient from './UgolovnoPravovayaZashchitaClient';

export const metadata: Metadata = {
  title: 'Уголовно-правовая защита бизнеса в Липецке | Де-Юре',
  description:
    'Помогаем компаниям, собственникам и руководителям при проверках, обысках и уголовном преследовании. Оценка рисков и координация защиты в Липецке.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Уголовно-правовая защита бизнеса в Липецке — ЮК «Де-Юре»',
    description:
      'Оценка уголовно-правовых рисков, помощь при действиях правоохранительных органов и организация защиты бизнеса и руководителей.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/ugolovno-pravovaya-zashchita-biznesa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Уголовно-правовая защита бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Уголовно-правовая защита бизнеса в Липецке | Де-Юре',
    description:
      'Оценка уголовно-правовых рисков, помощь при действиях правоохранительных органов и организация защиты бизнеса и руководителей.',
    images: ['https://dejure-help.ru/images/og/ugolovno-pravovaya-zashchita-biznesa-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/',
  },
};

export default function UgolovnoPravovayaZashchitaPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/#breadcrumbs',
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
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/#service',
        name: 'Уголовно-правовая защита бизнеса в Липецке',
        description:
          'Помогаем компаниям, собственникам и руководителям при проверках, обысках и уголовном преследовании. Оценка рисков и координация защиты в Липецке.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/',
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
      <UgolovnoPravovayaZashchitaClient />
    </>
  );
}
