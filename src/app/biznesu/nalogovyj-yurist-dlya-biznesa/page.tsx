import { Metadata } from 'next';
import NalogovyjYuristClient from './NalogovyjYuristClient';

export const metadata: Metadata = {
  title: 'Налоговый юрист для бизнеса в Липецке — проверки и споры с ФНС | Де-Юре',
  description:
    'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Налоговый юрист для бизнеса в Липецке — проверки и споры с ФНС | Де-Юре',
    description:
      'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса.',
    url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/nalogovyj-yurist-dlya-biznesa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Налоговый юрист для бизнеса в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Налоговый юрист для бизнеса в Липецке — проверки и споры с ФНС | Де-Юре',
    description:
      'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса.',
    images: ['https://dejure-help.ru/images/og/nalogovyj-yurist-dlya-biznesa-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/',
  },
};

export default function NalogovyjYuristPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/#breadcrumbs',
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
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/#service',
        name: 'Налоговый юрист для бизнеса в Липецке',
        description:
          'Сопровождение налоговых проверок, возражения на акт, обжалование доначислений и решений ФНС, защита при обвинении в дроблении бизнеса.',
        url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/',
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
      <NalogovyjYuristClient />
    </>
  );
}
