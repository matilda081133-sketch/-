import React from 'react';
import type { Metadata } from 'next';
import SporyPoOsagoClient from './SporyPoOsagoClient';

export const metadata: Metadata = {
  title: 'Юрист по спорам по ОСАГО в Липецке — отказ или недоплата страховой | Де-Юре',
  description: 'Помощь автоюриста по ОСАГО в Липецке: занижение выплаты, некачественный ремонт, отказ в возмещении. Претензия, финансовый уполномоченный и суд.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/',
  },
  openGraph: {
    title: 'Юрист по спорам по ОСАГО в Липецке | Де-Юре',
    description: 'Взыскание страховых выплат по ОСАГО, оспаривание недоплат и некачественного ремонта.',
    url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/',
    siteName: 'ЮК «Де-Юре»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/avtoyurist.jpg',
        width: 1200,
        height: 630,
        alt: 'Юрист по спорам по ОСАГО в Липецке — ЮК «Де-Юре»',
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
    q: 'Что делать, если страховая по ОСАГО выплатила мало?',
    a: 'Получите у страховщика акт о страховом случае с калькуляцией ущерба. Проведите независимую экспертизу, направьте претензию и обратитесь к финансовому уполномоченному для взыскания разницы со штрафными санкциями.'
  },
  {
    q: 'Страховая предлагает ремонт вместо денег. Можно ли отказаться?',
    a: 'По закону об ОСАГО натуральное возмещение является приоритетным для легковых авто граждан. Однако при отсутствии договора со станцией в пределах 50 км, нарушении сроков ремонта или полной гибели авто можно требовать денежную выплату.'
  },
  {
    q: 'Обязателен ли досудебный порядок по спорам с ОСАГО?',
    a: 'Да. Сначала подаётся заявление (претензия) в страховую компанию (срок рассмотрения 10-30 дней), затем обращение к финансовому уполномоченному. Без соблюдения этого порядка суд оставит иск без рассмотрения.'
  },
  {
    q: 'Что грозит страховой за затягивание выплаты по ОСАГО?',
    a: 'За каждый день просрочки выплаты страховая обязана уплатить неустойку в размере 1% от суммы страхового возмещения, а также финансовую санкцию за задержку направления мотивированного отказа.'
  },
  {
    q: 'Как взыскать разницу, если лимита ОСАГО в 400 000 руб. не хватило?',
    a: 'Сумма ущерба сверх лимита ОСАГО в 400 000 рублей взыскивается непосредственно с виновника ДТП на основании отчёта независимой экспертизы.'
  }
];

export default function SporyPoOsagoPage() {
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Автоюрист', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/' },
          { '@type': 'ListItem', position: 4, name: 'Споры по ОСАГО', item: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/',
        name: 'Юрист по спорам по ОСАГО в Липецке — отказ или недоплата страховой | Де-Юре',
        description: 'Помощь автоюриста по ОСАГО в Липецке: занижение выплаты, некачественный ремонт, отказ в возмещении.',
        inLanguage: 'ru-RU',
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/#service'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/#service',
        name: 'Споры по ОСАГО',
        serviceType: 'Юридическая помощь по обязательным страховым спорам ОСАГО',
        description: 'Защита интересов автовладельцев при занижении выплат ОСАГО, некачественном ремонте, отказах страховщиков и взыскании неустоек.',
        url: 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/',
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
        '@id': 'https://dejure-help.ru/grazhdanam/avtoyurist/spory-po-osago/#faq',
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
      <SporyPoOsagoClient />
    </>
  );
}
