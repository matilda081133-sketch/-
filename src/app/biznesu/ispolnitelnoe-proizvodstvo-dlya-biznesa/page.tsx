import { Metadata } from 'next';
import IspolnitelnoeClient from './IspolnitelnoeClient';

export const metadata: Metadata = {
  title: 'Ispolnitelnoe proizvodstvo dlia biznesa v Lipetske | De-Yure',
  description: 'Soprovozhdaem ispolnitelnoe proizvodstvo organizatsiy: vzyskanie po ispolnitelnym dokumentam, rabota s FSSP i zashchita biznesa ot nezakonnykh mer. Lipetsk i oblast.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Ispolnitelnoe proizvodstvo dlia biznesa - YuK De-Yure',
    description: 'Soprovozhdaem ispolnitelnoe proizvodstvo organizatsiy: vzyskanie po ispolnitelnym dokumentam, rabota s FSSP i zashchita biznesa ot nezakonnykh mer.',
    url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
    siteName: 'YuK De-Yure',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
  },
};

export default function IspolnitelnoeProizvodstvoPage() {
  const jsonLd = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Glavnaya', item: 'https://dejure-help.ru/' },
        { '@type': 'ListItem', position: 2, name: 'Biznesu', item: 'https://dejure-help.ru/biznesu/' },
        { '@type': 'ListItem', position: 3, name: 'Ispolnitelnoe proizvodstvo dlya biznesa', item: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/' },
      ],
    },
    {
      '@type': 'WebPage',
      name: 'Ispolnitelnoe proizvodstvo dlya biznesa v Lipetske | De-Yure',
      description: 'Soprovozhdaem ispolnitelnoe proizvodstvo organizatsiy: vzyskanie po ispolnitelnym dokumentam, rabota s FSSP i zashchita biznesa ot nezakonnykh mer.',
      url: 'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
    },
    {
      '@type': 'Service',
      name: 'Ispolnitelnoe proizvodstvo dlya biznesa',
      description: 'Yuridicheskoe soprovozhdenie ispolnitelnogo proizvodstva dlya organizatsiy: vzyskanie po ispolnitelnym listam, obzhalovanie deystviy pristavov, zashchita dolzhnika.',
      provider: {
        '@type': 'LegalService',
        name: 'YuK De-Yure',
        url: 'https://dejure-help.ru/',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'pl. Plekhanova, d. 1, of. 213',
          addressLocality: 'Lipetsk',
          addressCountry: 'RU',
        },
      },
      areaServed: 'Lipetsk i Lipetskaya oblast',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mozhno li predyavit ispolnitelnyy list napryamuyu v bank, minuya FSSP?',
          acceptedAnswer: { '@type': 'Answer', text: 'Da. Esli vam izvesten bank, v kotorom u dolzhnika otkryt schet, vzyskatel vprave predyavit ispolnitelnyy list neposredstvenno v eto kreditnoe uchrezhdenie. Bank obyazan ispolnit dokument v techenie trekh dney.' },
        },
        {
          '@type': 'Question',
          name: 'Pristav ne prinimaet mer uzhe dva mesyatsa. Chto delat?',
          acceptedAnswer: { '@type': 'Answer', text: 'Vzyskatel vprave podat zhalobu na bezdeystvie: vyshestoyashchemu pristavy, v prokuraturu ili v sud. Zhaloba sostavlyaetsya v pismennon vide s ukazaniem konkretnykh narusheniy.' },
        },
        {
          '@type': 'Question',
          name: 'Pristav arestoval raschetnyy schet. Kak prodolzhat deyatelnost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Arest scheta ne oznachaet avtomaticheskuyu blokirovku vsekh operatsiy. Zakon predusmatrivaet ocherednost spisaniya. Takzhe mozhno khodataystvovat ob otsrochke ispolneniya.' },
        },
        {
          '@type': 'Question',
          name: 'Mozhno li poluchit otsrochku ili rassrochku ispolneniya?',
          acceptedAnswer: { '@type': 'Answer', text: 'Da. Dolzhnik vprave obratitsya v sud s zayavleniem ob otsrochke ili rassrochke ispolneniya sudebnogo akta, ukazav obstoyatelstva, delayushchie nemedlennoe ispolnenie zatrudnitelnym.' },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonLd }),
        }}
      />
      <IspolnitelnoeClient />
    </>
  );
}