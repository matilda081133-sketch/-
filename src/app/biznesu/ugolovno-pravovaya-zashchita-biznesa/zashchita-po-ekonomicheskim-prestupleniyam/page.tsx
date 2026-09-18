import { Metadata } from 'next';
import ZashchitaPoEkonomicheskimPrestupleniyamClient from './ZashchitaPoEkonomicheskimPrestupleniyamClient';

export const metadata: Metadata = {
  title: 'Защита по экономическим преступлениям в Липецке | Де-Юре',
  description:
    'Защищаем собственников, директоров и сотрудников при обвинениях по экономическим статьям УК РФ. Адвокаты по экономическим делам в Липецке.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита по экономическим преступлениям | Де-Юре',
    description:
      'Организуем защиту собственников, руководителей и сотрудников при обвинениях по экономическим статьям УК РФ.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-po-ekonomicheskim-prestupleniyam-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита по экономическим преступлениям в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита по экономическим преступлениям в Липецке | Де-Юре',
    description:
      'Защищаем собственников, директоров и сотрудников при обвинениях по экономическим статьям УК РФ. Адвокаты по экономическим делам в Липецке.',
    images: ['https://dejure-help.ru/images/og/zashchita-po-ekonomicheskim-prestupleniyam-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
  },
};

export default function ZashchitaPoEkonomicheskimPrestupleniyamPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/#breadcrumbs',
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
            name: 'Защита по экономическим преступлениям',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/#service',
        name: 'Защита по экономическим преступлениям в Липецке',
        description:
          'Защищаем собственников, директоров и сотрудников при обвинениях по экономическим статьям УК РФ. Адвокаты по экономическим делам в Липецке.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
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
      <ZashchitaPoEkonomicheskimPrestupleniyamClient />
    </>
  );
}
