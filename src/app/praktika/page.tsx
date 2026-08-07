import { Metadata } from 'next';
import PraktikaClient from './PraktikaClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Практика и примеры дел юристов | ЮК «Де-Юре»',
  description: 'Примеры дел специалистов ЮК «Де-Юре»: исходные ситуации, работа юристов и полученные результаты. Кейсы обезличены с соблюдением конфиденциальности.',
  alternates: {
    canonical: 'https://dejure-help.ru/praktika/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Практика и примеры дел юристов | ЮК «Де-Юре»',
    description: 'Примеры дел специалистов ЮК «Де-Юре»: исходные ситуации, работа юристов и полученные результаты. Кейсы обезличены с соблюдением конфиденциальности.',
    url: 'https://dejure-help.ru/praktika/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'Практика и примеры дел юристов ЮК «Де-Юре»',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function PraktikaPage() {
  const jsonLdGraph = [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://dejure-help.ru/praktika/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Главная',
          item: 'https://dejure-help.ru/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Практика',
          item: 'https://dejure-help.ru/praktika/',
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://dejure-help.ru/praktika/#webpage',
      url: 'https://dejure-help.ru/praktika/',
      name: 'Практика и примеры дел юристов | ЮК «Де-Юре»',
      description:
        'Примеры дел специалистов ЮК «Де-Юре»: исходные ситуации, работа юристов и полученные результаты. Кейсы обезличены с соблюдением конфиденциальности.',
      breadcrumb: { '@id': 'https://dejure-help.ru/praktika/#breadcrumb' },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': jsonLdGraph,
          }),
        }}
      />
      <PraktikaClient />
    </>
  );
}
