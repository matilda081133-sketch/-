import { Metadata } from 'next';
import OsparivanieReshenijFnsClient from './OsparivanieReshenijFnsClient';

export const metadata: Metadata = {
  title: 'Оспаривание доначислений и решений ФНС в Липецке | Де-Юре',
  description:
    'Помощь бизнесу в Липецке при оспаривании налоговых доначислений и решений ФНС: апелляционная жалоба, жалоба в УФНС и представительство в арбитражном суде.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Оспаривание доначислений и решений ФНС в Липецке | Де-Юре',
    description:
      'Помощь бизнесу в Липецке при оспаривании налоговых доначислений и решений ФНС: апелляционная жалоба, жалоба в УФНС и представительство в арбитражном суде.',
    url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/osparivanie-donachislenij-i-reshenij-fns-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Оспаривание доначислений и решений ФНС в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оспаривание доначислений и решений ФНС в Липецке | Де-Юре',
    description:
      'Помощь бизнесу в Липецке при оспаривании налоговых доначислений и решений ФНС: апелляционная жалоба, жалоба в УФНС и представительство в арбитражном суде.',
    images: ['https://dejure-help.ru/images/og/osparivanie-donachislenij-i-reshenij-fns-og.jpg'],
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/',
  },
};

export default function OsparivanieReshenijFnsPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/#breadcrumbs',
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
            name: 'Оспаривание доначислений и решений ФНС',
            item: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/#service',
        name: 'Оспаривание доначислений и решений ФНС в Липецке',
        description:
          'Помощь бизнесу в Липецке при оспаривании налоговых доначислений и решений ФНС: апелляционная жалоба, жалоба в УФНС и представительство в арбитражном суде.',
        url: 'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/',
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
      <OsparivanieReshenijFnsClient />
    </>
  );
}
