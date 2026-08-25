import React from 'react';
import ObzhalovanieClient from './ObzhalovanieClient';

export const metadata = {
  title: 'Обжалование действий судебного пристава в Липецке | Де-Юре',
  description: 'Обжалуем незаконные постановления, действия и бездействие судебных приставов в Липецке. Анализ материалов, жалоба руководителю или обращение в суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/',
  },
  openGraph: {
    title: 'Обжалование действий и бездействия судебного пристава | Де-Юре',
    description: 'Проверим материалы исполнительного производства, выберем порядок обжалования, подготовим документы и представим Ваши интересы.',
    url: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://dejure-help.ru/images/smolyaninova.jpg', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function ObzhalovaniePage() {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://dejure-help.ru/#website',
        url: 'https://dejure-help.ru/',
        name: 'ЮК «Де-Юре»'
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'Де-Юре',
        url: 'https://dejure-help.ru/',
        logo: 'https://dejure-help.ru/images/logo.png',
        telephone: '+7 910 350-31-11',
        address: {
          '@type': 'PostalAddress',
          postalCode: '398001',
          streetAddress: 'пл. Плеханова, д. 1, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область', 'Россия']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/#service',
        name: 'Обжалование действий и бездействия судебного пристава в Липецке',
        description: 'Обжалование незаконных постановлений, действий и бездействия судебных приставов-исполнителей. Анализ материалов дела, жалоба в порядке подчинённости, административный иск в суд.',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецкая область'
        },
        serviceType: 'Юридические услуги по исполнительному производству'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/#breadcrumb',
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
            name: 'Гражданам',
            item: 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Юрист по исполнительному производству',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Обжалование действий судебного пристава',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/obzhalovanie-dejstvij-sudebnogo-pristava/'
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <ObzhalovanieClient />
    </>
  );
}