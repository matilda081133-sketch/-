import { Metadata } from 'next';
import ZashchitaPo1815KoapClient from './ZashchitaPo1815KoapClient';

export const metadata: Metadata = {
  title: 'Защита работодателя по статье 18.15 КоАП РФ в Липецке | Де-Юре',
  description:
    'Защита работодателя по статье 18.15 КоАП РФ в Липецке: анализ протокола и доказательств, участие в рассмотрении дела, подготовка и подача жалобы.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Защита работодателя по статье 18.15 КоАП РФ в Липецке | Де-Юре',
    description:
      'Защита работодателя по статье 18.15 КоАП РФ в Липецке: анализ протокола и доказательств, участие в рассмотрении дела, подготовка и подача жалобы.',
    url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/',
    siteName: 'Юридическая компания «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/migracionnyj-yurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Защита работодателя по статье 18.15 КоАП РФ в Липецке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Защита работодателя по статье 18.15 КоАП РФ в Липецке | Де-Юре',
    description:
      'Защита работодателя по статье 18.15 КоАП РФ в Липецке: анализ протокола и доказательств, участие в рассмотрении дела, подготовка и подача жалобы.',
    images: ['https://dejure-help.ru/images/og/migracionnyj-yurist.jpg'],
  },
  alternates: {
    canonical:
      'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/',
  },
};

export default function ZashchitaPo1815KoapPage() {
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
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/#breadcrumbs',
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
            name: 'Миграционное сопровождение бизнеса',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Защита по ст. 18.15 КоАП РФ',
            item: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/#service',
        name: 'Защита работодателя по статье 18.15 КоАП РФ в Липецке',
        description:
          'Защита работодателя по статье 18.15 КоАП РФ в Липецке: анализ протокола и доказательств, участие в рассмотрении дела, подготовка и подача жалобы.',
        url: 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/',
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
      <ZashchitaPo1815KoapClient />
    </>
  );
}
