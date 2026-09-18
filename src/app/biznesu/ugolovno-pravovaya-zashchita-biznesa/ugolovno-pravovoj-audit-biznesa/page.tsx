import { Metadata } from 'next';
import UgolovnoPravovojAuditClient from './UgolovnoPravovojAuditClient';

export const metadata: Metadata = {
  title: 'Уголовно-правовой аудит бизнеса в Липецке | Де-Юре',
  description:
    'Проверяем сделки, процессы, полномочия и документы компании на уголовно-правовые риски. Готовим приоритетные рекомендации для бизнеса.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Уголовно-правовой аудит бизнеса | Де-Юре',
    description:
      'Оценим уголовно-правовые риски процессов и решений компании до появления проверки или уголовного дела.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/ugolovno-pravovoj-audit-biznesa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Уголовно-правовой аудит бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Уголовно-правовой аудит бизнеса в Липецке | Де-Юре',
    description:
      'Проверяем сделки, процессы, полномочия и документы компании на уголовно-правовые риски. Готовим приоритетные рекомендации для бизнеса.',
    images: ['https://dejure-help.ru/images/og/ugolovno-pravovoj-audit-biznesa-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
  },
};

export default function UgolovnoPravovojAuditPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/#breadcrumbs',
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
            name: 'Уголовно-правовой аудит бизнеса',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/#service',
        name: 'Уголовно-правовой аудит бизнеса в Липецке',
        description:
          'Проверяем сделки, процессы, полномочия и документы компании на уголовно-правовые риски. Готовим приоритетные рекомендации для бизнеса.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
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
      <UgolovnoPravovojAuditClient />
    </>
  );
}
