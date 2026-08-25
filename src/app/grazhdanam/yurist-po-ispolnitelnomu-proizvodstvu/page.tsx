import { Metadata } from 'next';
import IspolnitelnoeGrazhdanamClient from './IspolnitelnoeGrazhdanamClient';

export const metadata: Metadata = {
  title: 'Юрист по исполнительному производству в Липецке | Де-Юре',
  description: 'Юрист по исполнительному производству в Липецке: помощь должникам и взыскателям, жалобы на приставов, аресты, списания и исполнение решений суда.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Юрист по исполнительному производству в Липецке | Де-Юре',
    description: 'Помощь гражданам-должникам и взыскателям: споры с приставами, незаконные списания, аресты и взыскание по исполнительному листу.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
  },
};

export default function IspolnitelnoeGrazhdanamPage() {
  const jsonLd = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
        { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
        { '@type': 'ListItem', position: 3, name: 'Юрист по исполнительному производству', item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/' },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Юрист по исполнительному производству в Липецке | Де-Юре',
      description: 'Юрист по исполнительному производству в Липецке: помощь должникам и взыскателям, жалобы на приставов, аресты, списания и исполнение решений суда.',
      url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
    },
    {
      '@type': 'Service',
      name: 'Юрист по исполнительному производству для граждан',
      description: 'Помощь гражданам-должникам и взыскателям: споры с приставами, незаконные списания, аресты счетов и автомобиля, взыскание по исполнительному листу.',
      provider: {
        '@type': 'LegalService',
        name: 'ЮК «Де-Юре»',
        url: 'https://dejure-help.ru/',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'пл. Плеханова, д. 1, оф. 213',
          addressLocality: 'Липецк',
          addressCountry: 'RU',
        },
      },
      areaServed: 'Липецк и Липецкая область',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd }) }}
      />
      <IspolnitelnoeGrazhdanamClient />
    </>
  );
}
