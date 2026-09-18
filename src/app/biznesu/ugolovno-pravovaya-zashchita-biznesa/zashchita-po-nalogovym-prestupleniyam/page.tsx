import { Metadata } from 'next';
import ZashchitaPoNalogovymPrestupleniyamClient from './ZashchitaPoNalogovymPrestupleniyamClient';

export const metadata: Metadata = {
  title: 'Защита по налоговым преступлениям в Липецке | Де-Юре',
  description:
    'Защита директоров и главбухов по ст. 199–199.2 УК РФ. Помощь при передаче налоговых материалов в следственные органы. Липецк и область.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита по налоговым преступлениям | Де-Юре',
    description:
      'Организуем защиту руководителей и бухгалтеров при передаче материалов ФНС в следственные органы и делах по ст. 199 УК РФ.',
    url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/zashchita-po-nalogovym-prestupleniyam-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита по налоговым преступлениям в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита по налоговым преступлениям в Липецке | Де-Юре',
    description:
      'Защита директоров и главбухов по ст. 199–199.2 УК РФ. Помощь при передаче налоговых материалов в следственные органы. Липецк и область.',
    images: ['https://dejure-help.ru/images/og/zashchita-po-nalogovym-prestupleniyam-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
  },
};

export default function ZashchitaPoNalogovymPrestupleniyamPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/#breadcrumbs',
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
            name: 'Защита по налоговым преступлениям',
            item: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/#service',
        name: 'Защита по налоговым преступлениям в Липецке',
        description:
          'Защита директоров и главбухов по ст. 199–199.2 УК РФ. Помощь при передаче налоговых материалов в следственные органы. Липецк и область.',
        url: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
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
      <ZashchitaPoNalogovymPrestupleniyamClient />
    </>
  );
}
