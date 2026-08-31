import React from 'react';
import type { Metadata } from 'next';
import DtpBezOsagoClient from './DtpBezOsagoClient';

export const metadata: Metadata = {
  title: 'Взыскание ущерба при ДТП без ОСАГО в Липецке — помощь автоюриста | Де-Юре',
  description: 'Помощь автоюриста в Липецке, если у виновника ДТП нет полиса ОСАГО: установление собственника, независимая экспертиза, арест имущества и суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/',
  },
  openGraph: {
    title: 'Взыскание ущерба при ДТП без ОСАГО в Липецке | Де-Юре',
    description: 'Взыскание ущерба с виновника без полиса ОСАГО: независимая оценка, досудебная претензия, судебный иск и исполнение решения.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/avtoyurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Взыскание ущерба при ДТП без ОСАГО в Липецке — ЮК «Де-Юре»',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://dejure-help.ru/images/og/avtoyurist.jpg'],
  },
};

const faqs = [
  {
    q: 'Кто платит за ущерб, если у виновника нет страховки ОСАГО?',
    a: 'Обязанность возместить ущерб в полном объёме возлагается непосредственно на виновника ДТП и (или) законного владельца транспортного средства на основании ст. 1064 и 1079 ГК РФ.'
  },
  {
    q: 'Можно ли получить компенсационную выплату от РСА?',
    a: 'Российский Союз Автостраховщиков производит компенсационные выплаты при отсутствии ОСАГО у виновника только в части вреда, причинённого жизни или здоровью потерпевших. За повреждение автомобиля РСА в таком случае не выплачивает.'
  },
  {
    q: 'Как проверить, действительно ли у виновника отсутствует полис?',
    a: 'Проверка проводится по единой автоматизированной информационной системе страхования (АИС Страхования / сервис НСИС) по VIN, госномеру или номеру кузова автомобиля.'
  },
  {
    q: 'Что делать, если виновник не является собственником автомобиля?',
    a: 'Если водитель управлял автомобилем без законных оснований (доверенности, путевого листа или договора аренды), ответственность может быть возложена солидарно на собственника транспортного средства.'
  },
  {
    q: 'Как обеспечить реальное получение денег с виновника через суд?',
    a: 'Одновременно с подачей иска в суд юрист заявляет ходатайство о принятии обеспечительных мер — наложении ареста на автомобиль, банковские счета и другое имущество виновника аварии.'
  }
];

export default function DtpBezOsagoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'ЮК «Де-Юре»',
        url: 'https://dejure-help.ru/',
        logo: 'https://dejure-help.ru/images/logo.png',
        telephone: '+7 (910) 350-31-11',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, 35',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
        name: 'Дмитрий Сергеевич Конопкин',
        jobTitle: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',
        url: 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Автоюрист', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/' },
          { '@type': 'ListItem', position: 4, name: 'Взыскание ущерба без ОСАГО', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/',
        name: 'Взыскание ущерба при ДТП без ОСАГО в Липецке — помощь автоюриста | Де-Юре',
        description: 'Помощь автоюриста в Липецке, если у виновника ДТП нет полиса ОСАГО.',
        inLanguage: 'ru-RU',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/#service',
        name: 'Взыскание ущерба при ДТП без ОСАГО',
        serviceType: 'Юридическая помощь по взысканию вреда с виновников ДТП без полиса страхования',
        description: 'Организация независимой экспертизы, розыск имущества и счетов виновника, досудебная претензионная работа и взыскание ущерба через суд.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Липецкая область' },
          { '@type': 'Country', name: 'Россия' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/vzyskanie-ushcherba-pri-dtp-bez-osago/#faq',
        mainEntity: faqs.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DtpBezOsagoClient />
    </>
  );
}
